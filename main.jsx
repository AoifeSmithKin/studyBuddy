@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;0,9..40,800;1,9..40,400&family=Space+Mono:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'DM Sans', 'Segoe UI', sans-serif;
  background: #12121f;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
}

textarea:focus {
  border-color: rgba(255, 107, 74, 0.5) !important;
  outline: none;
}

/* Print preview inline content styles */
.card { border: 1px solid #ddd; border-radius: 12px; padding: 16px; margin-bottom: 12px; }
.card-q { font-weight: 700; font-size: 15px; margin-bottom: 6px; }
.card-a { color: #555; font-size: 14px; }
.branch { border: 1px solid #ddd; border-radius: 12px; padding: 14px; margin-bottom: 10px; }
.branch-title { font-weight: 700; font-size: 15px; margin-bottom: 6px; }
.branch ul { padding-left: 20px; margin: 0; }
.branch li { margin-bottom: 4px; font-size: 13px; }
.quiz-q { margin-bottom: 16px; }
.quiz-q h3 { font-size: 14px; font-weight: 700; margin-bottom: 8px; }
.quiz-opt { padding: 6px 0; font-size: 13px; }
.quiz-opt.correct { font-weight: 700; color: #2a7a5a; }
.quiz-exp { font-size: 12px; color: #666; margin-top: 6px; font-style: italic; }
.section { border-left: 3px solid #FF6B4A; padding-left: 16px; margin-bottom: 20px; }
.section-title { font-weight: 700; font-size: 15px; margin-bottom: 4px; }
.analogy { font-size: 13px; color: #2a7a5a; margin-top: 8px; }
.key-point { display: flex; gap: 10px; margin-bottom: 10px; align-items: flex-start; }
.point-num { min-width: 24px; height: 24px; border-radius: 50%; background: #FF6B4A; color: #fff; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.term { margin-bottom: 6px; font-size: 13px; }
.term-word { font-weight: 700; color: #2a7a5a; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
