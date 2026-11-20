export function downloadFormattedCV(): void {
  const cvHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CV - Md Rahed Uzzaman</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #18181b; max-width: 820px; margin: 40px auto; padding: 0 24px; line-height: 1.55; }
    h1 { font-size: 28px; margin: 0 0 4px; letter-spacing: -0.02em; }
    .tagline { font-size: 15px; color: #047857; font-weight: 600; margin-bottom: 10px; }
    .contact { font-size: 13px; color: #52525b; border-bottom: 1px solid #e4e4e7; padding-bottom: 14px; margin-bottom: 22px; }
    h2 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; color: #09090b; border-bottom: 1px solid #e4e4e7; padding-bottom: 4px; margin-top: 22px; margin-bottom: 10px; }
    h3 { font-size: 15px; margin: 10px 0 2px; }
    .meta { font-size: 13px; color: #52525b; margin-bottom: 6px; }
    ul { margin: 6px 0 12px 18px; padding: 0; font-size: 14px; }
    li { margin-bottom: 4px; }
    p { font-size: 14px; margin: 6px 0; }
  </style>
</head>
<body>
  <h1>Md Rahed Uzzaman</h1>
  <div class="tagline">Aspiring Software Engineer &amp; Cricket Tech Enthusiast</div>
  <div class="contact">
    Email: rahed242-15-596@diu.edu.bd &middot;
    University: Daffodil International University (DIU) &middot;
    GitHub: github.com/rahed-uzzaman &middot;
    LinkedIn: linkedin.com/in/md-rahed-uzzaman
  </div>

  <h2>Profile</h2>
  <p>
    Computer Science and Engineering (CSE) undergraduate at Daffodil International University with a strong academic focus on Software Engineering, Database Management Systems, Compiler Design, and Microprocessors. Aspiring to pursue a Master's degree in Europe and build high-precision sports technology and cricket analytics platforms aligned with ICC standards.
  </p>

  <h2>Education</h2>
  <h3>BSc in Computer Science and Engineering (CSE)</h3>
  <div class="meta">Daffodil International University (DIU) &middot; Dhaka, Bangladesh</div>
  <p>Relevant Coursework: Software Engineering, Database Management Systems (DBMS), Compiler Design, Microprocessors &amp; 8086 Assembly, Data Structures &amp; Algorithms.</p>

  <h2>Technical Skills</h2>
  <ul>
    <li><strong>Languages:</strong> C, C++, PHP, JavaScript, 8086 Assembly, SQL</li>
    <li><strong>Web &amp; Tools:</strong> HTML5, CSS3, MySQL, XAMPP, Git, GitHub, VS Code, Flex &amp; Bison</li>
  </ul>

  <h2>Selected Projects</h2>
  <h3>Student Management System (SMS) &mdash; Attendance Management Module</h3>
  <div class="meta">PHP, MySQL, XAMPP, HTML5, CSS3</div>
  <ul>
    <li>Developed the Attendance Management Module supporting full Add, List, and Delete operations for student records.</li>
    <li>Designed relational MySQL schemas and SQL queries for reliable daily attendance tracking.</li>
  </ul>

  <h3>Compiler &amp; Lexical Analyzer Lab Projects</h3>
  <div class="meta">Flex, Bison, GCC, C</div>
  <ul>
    <li>Built lexical analyzers using Flex regular-expression rules to classify keywords, identifiers, operators, and literals.</li>
    <li>Implemented syntax parsers with Bison grammars and compiled executables using GCC.</li>
  </ul>

  <h2>Athletics &amp; Extracurriculars</h2>
  <ul>
    <li><strong>Cricket:</strong> Fast bowler and capable all-round batter with deep tactical understanding of match dynamics.</li>
    <li><strong>Football:</strong> Attacking striker with strong finishing, spatial awareness, and team coordination.</li>
  </ul>

  <h2>Career Aspirations</h2>
  <p>
    Targeting graduate studies (MSc) in Software Engineering or Computer Science in Europe, and contributing to cricket analytics, real-time ball-tracking telemetry, and sports technology platforms.
  </p>
</body>
</html>`;

  const blob = new Blob([cvHtml], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Md_Rahed_Uzzaman_CV.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
