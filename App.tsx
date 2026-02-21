
import React, { useState, useMemo, useRef } from 'react';
import { MATH_QUESTIONS } from './questions';
import { Printer, RotateCcw, CheckCircle2, FileText, Download, Save } from 'lucide-react';

const App: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userClass, setUserClass] = useState('');
  const pdfRef = useRef<HTMLDivElement>(null);

  const handleAnswerChange = (questionId: number, value: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    if (Object.keys(userAnswers).length < MATH_QUESTIONS.length) {
      if (!confirm('아직 풀지 않은 문제가 있습니다. 제출하시겠습니까?')) return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (confirm('모든 답안을 초기화하고 다시 풀겠습니까?')) {
      setUserAnswers({});
      setIsSubmitted(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const saveAsPdf = () => {
    const element = document.getElementById('pdf-export-container');
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `4학년_진단평가_${userName || '학생'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // @ts-ignore
    html2pdf().from(element).set(opt).save();
  };

  const score = useMemo(() => {
    let correctCount = 0;
    MATH_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer.toString()) {
        correctCount++;
      }
    });
    return (correctCount / MATH_QUESTIONS.length) * 100;
  }, [userAnswers]);

  // 페이지별 문제 분할
  const page1Questions = MATH_QUESTIONS.slice(0, 8);
  const page2Questions = MATH_QUESTIONS.slice(8, 15);
  const page3Questions = MATH_QUESTIONS.slice(15, 20);

  return (
    <div className="min-h-screen">
      {/* 웹용 헤더 */}
      <header className="no-print sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm px-4 py-4 mb-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <span className="text-blue-600 font-black">당당수학</span> 4학년 진단평가
              </h1>
              <p className="text-xs text-slate-500">예비 4학년 (3학년 과정 복습) | 총 20문항</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {!isSubmitted ? (
              <button onClick={handleSubmit} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-md active:scale-95">
                <CheckCircle2 size={18} /> 채점하기
              </button>
            ) : (
              <button onClick={handleReset} className="flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-lg font-bold transition-all">
                <RotateCcw size={18} /> 다시 풀기
              </button>
            )}
            <button onClick={saveAsPdf} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-md active:scale-95">
              <Save size={18} /> PDF 저장
            </button>
            <button onClick={handlePrint} className="flex items-center gap-2 bg-slate-800 hover:bg-black text-white px-4 py-2 rounded-lg font-bold transition-all shadow-md">
              <Printer size={18} /> 인쇄
            </button>
          </div>
        </div>
      </header>

      {/* 웹 인터랙티브 화면 */}
      <main className="no-print max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="이름" value={userName} onChange={(e) => setUserName(e.target.value)} className="border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="text" placeholder="학교/학급" value={userClass} onChange={(e) => setUserClass(e.target.value)} className="border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>

        {isSubmitted && (
          <div className="bg-blue-600 p-8 rounded-2xl text-white mb-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-2">테스트 완료!</h2>
            <p className="text-5xl font-black mb-4">{score}점</p>
            <p className="opacity-90">20문제 중 {MATH_QUESTIONS.filter(q => userAnswers[q.id] === q.correctAnswer.toString()).length}문제를 맞혔습니다.</p>
          </div>
        )}

        <div className="space-y-6">
          {MATH_QUESTIONS.map((q, idx) => (
            <div key={q.id} className={`bg-white p-6 rounded-2xl border ${isSubmitted ? (userAnswers[q.id] === q.correctAnswer.toString() ? 'border-emerald-200 bg-emerald-50/30' : 'border-rose-200 bg-rose-50/30') : 'border-slate-200'}`}>
              <div className="flex gap-4">
                <span className="font-bold text-slate-400 text-lg">{idx + 1}.</span>
                <div className="flex-grow">
                  <p className="text-lg font-bold text-slate-800 mb-4">{q.question}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {q.choices?.map(c => (
                      <button key={c.id} disabled={isSubmitted} onClick={() => handleAnswerChange(q.id, c.id.toString())} className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${userAnswers[q.id] === c.id.toString() ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'bg-slate-50 border-slate-100 hover:border-blue-300'}`}>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${userAnswers[q.id] === c.id.toString() ? 'bg-white text-blue-600' : 'bg-white border-slate-300'}`}>{c.id}</span>
                        {c.text}
                      </button>
                    ))}
                  </div>
                  {isSubmitted && (
                    <div className="mt-4 p-4 bg-white/60 rounded-xl border border-slate-100 text-sm">
                      <p className="font-bold text-slate-700 mb-1 underline">정답: {q.correctAnswer}번</p>
                      <p className="text-slate-600">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* PDF 및 인쇄용 전용 레이아웃 (정적 레이아웃) */}
      <div id="pdf-export-container">
        {/* Page 1 */}
        <div className="pdf-page">
          <div className="flex justify-between items-start mb-6 border-b-2 border-slate-800 pb-4">
            <div className="text-blue-600 font-black text-2xl tracking-tighter">당당수학</div>
            <div className="text-center">
              <h1 className="text-2xl font-black mb-1">초등 4학년 기초학력 진단검사 (수학)</h1>
              <p className="text-sm text-slate-600 italic">3학년 과정 핵심 영역 총정리</p>
            </div>
            <div className="text-right text-xs text-slate-400 font-bold">1 / 3</div>
          </div>
          
          <div className="flex gap-4 mb-8 border border-slate-800 p-3 bg-slate-50 text-sm">
            <div className="flex-1"><b>학급:</b> {userClass || '__________________'}</div>
            <div className="flex-1"><b>성명:</b> {userName || '__________________'}</div>
            <div className="w-24"><b>번호:</b> ______</div>
          </div>

          <div className="flex-grow">
            {page1Questions.map((q, idx) => (
              <div key={q.id} className="question-item">
                <div className="flex gap-2">
                  <span className="font-black text-lg">{idx + 1}.</span>
                  <div className="flex-grow">
                    <p className="font-bold text-base mb-3 leading-tight">{q.question}</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                      {q.choices?.map(c => (
                        <div key={c.id} className="text-sm flex items-center gap-2">
                          <span className="w-4 h-4 border border-black rounded-full flex items-center justify-center text-[10px]">{c.id}</span>
                          {c.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-12 h-6 border border-slate-300 rounded flex items-center justify-center text-[10px] text-slate-300">( &nbsp; )</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page 2 */}
        <div className="pdf-page">
          <div className="flex justify-between items-center mb-6 border-b border-slate-300 pb-2">
            <div className="text-blue-600 font-bold text-sm">당당수학 진단평가</div>
            <div className="text-xs text-slate-400 font-bold">2 / 3</div>
          </div>
          
          <div className="flex-grow">
            {page2Questions.map((q, idx) => (
              <div key={q.id} className="question-item">
                <div className="flex gap-2">
                  <span className="font-black text-lg">{idx + 9}.</span>
                  <div className="flex-grow">
                    <p className="font-bold text-base mb-3 leading-tight">{q.question}</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                      {q.choices?.map(c => (
                        <div key={c.id} className="text-sm flex items-center gap-2">
                          <span className="w-4 h-4 border border-black rounded-full flex items-center justify-center text-[10px]">{c.id}</span>
                          {c.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-12 h-6 border border-slate-300 rounded flex items-center justify-center text-[10px] text-slate-300">( &nbsp; )</div>
                </div>
              </div>
            ))}
          </div>
          {/* 하단 빈 공간 여백 조절 */}
          <div className="h-20"></div>
        </div>

        {/* Page 3 */}
        <div className="pdf-page">
          <div className="flex justify-between items-center mb-6 border-b border-slate-300 pb-2">
            <div className="text-blue-600 font-bold text-sm">당당수학 진단평가</div>
            <div className="text-xs text-slate-400 font-bold">3 / 3</div>
          </div>
          
          <div className="flex-grow">
            {page3Questions.map((q, idx) => (
              <div key={q.id} className="question-item">
                <div className="flex gap-2">
                  <span className="font-black text-lg">{idx + 16}.</span>
                  <div className="flex-grow">
                    <p className="font-bold text-base mb-3 leading-tight">{q.question}</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                      {q.choices?.map(c => (
                        <div key={c.id} className="text-sm flex items-center gap-2">
                          <span className="w-4 h-4 border border-black rounded-full flex items-center justify-center text-[10px]">{c.id}</span>
                          {c.text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-12 h-6 border border-slate-300 rounded flex items-center justify-center text-[10px] text-slate-300">( &nbsp; )</div>
                </div>
              </div>
            ))}
            
            {/* 정답 및 해설 섹션 (3페이지 하단 또는 정답지 모드일 때만 포함 가능) */}
            <div className="mt-10 border-t-2 border-black pt-6">
              <h3 className="font-black text-lg mb-4 text-center underline">정답 및 해설 (채점용)</h3>
              <div className="grid grid-cols-2 gap-4 text-[10px]">
                {MATH_QUESTIONS.map((q, idx) => (
                  <div key={`ans-${q.id}`} className="border-b border-slate-100 pb-1">
                    <span className="font-bold">{idx + 1}번:</span> {q.correctAnswer}번 - {q.explanation.slice(0, 45)}...
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 border-2 border-slate-800 p-4 text-center bg-slate-50">
            <p className="text-lg font-black italic">"수학의 자신감, 당당수학이 함께합니다."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
