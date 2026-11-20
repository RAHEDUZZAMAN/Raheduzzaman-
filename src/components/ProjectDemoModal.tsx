import { useEffect, useMemo, useState, FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Plus,
  Terminal,
  Trash2,
  X,
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectDemoModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  course: string;
  date: string;
  status: 'Present' | 'Absent' | 'Late';
}

const INITIAL_ATTENDANCE: AttendanceRecord[] = [
  {
    id: 'rec-1',
    studentId: '242-15-596',
    studentName: 'Md Rahed Uzzaman',
    course: 'CSE-311 (DBMS)',
    date: '2026-11-18',
    status: 'Present',
  },
  {
    id: 'rec-2',
    studentId: '242-15-612',
    studentName: 'Tanvir Ahmed',
    course: 'CSE-321 (Software Eng.)',
    date: '2026-11-18',
    status: 'Present',
  },
  {
    id: 'rec-3',
    studentId: '242-15-634',
    studentName: 'Nusrat Jahan',
    course: 'CSE-311 (DBMS)',
    date: '2026-11-18',
    status: 'Late',
  },
  {
    id: 'rec-4',
    studentId: '242-15-649',
    studentName: 'Farhan Sadik',
    course: 'CSE-331 (Compiler)',
    date: '2026-11-17',
    status: 'Absent',
  },
];

function SmsAttendanceDemo() {
  const [records, setRecords] = useState<AttendanceRecord[]>(INITIAL_ATTENDANCE);
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('CSE-311 (DBMS)');
  const [date, setDate] = useState('2026-11-20');
  const [status, setStatus] = useState<'Present' | 'Absent' | 'Late'>('Present');
  const [courseFilter, setCourseFilter] = useState('All');
  const [formError, setFormError] = useState('');

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (!studentId.trim() || !studentName.trim()) {
      setFormError('Please enter both Student ID and Student Name.');
      return;
    }
    setFormError('');
    const newRecord: AttendanceRecord = {
      id: `rec-${Date.now()}`,
      studentId: studentId.trim(),
      studentName: studentName.trim(),
      course,
      date,
      status,
    };
    setRecords((prev) => [newRecord, ...prev]);
    setStudentId('');
    setStudentName('');
  };

  const handleDelete = (id: string) => {
    setRecords((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredRecords = useMemo(() => {
    if (courseFilter === 'All') return records;
    return records.filter((r) => r.course === courseFilter);
  }, [records, courseFilter]);

  const stats = useMemo(() => {
    const total = records.length;
    const present = records.filter((r) => r.status === 'Present').length;
    const rate = total > 0 ? Math.round((present / total) * 100) : 0;
    return { total, present, rate };
  }, [records]);

  return (
    <div className="space-y-6">
      {/* Module Summary Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/70 p-3.5">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Total Logs</p>
          <p className="mt-1 font-display text-xl font-bold text-zinc-950 dark:text-zinc-50 tabular-nums">
            {stats.total}
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/70 p-3.5">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Present</p>
          <p className="mt-1 font-display text-xl font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
            {stats.present}
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/70 p-3.5">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Attendance Rate</p>
          <p className="mt-1 font-display text-xl font-bold text-zinc-950 dark:text-zinc-50 tabular-nums">
            {stats.rate}%
          </p>
        </div>
      </div>

      {/* Add Attendance Form */}
      <form
        onSubmit={handleAdd}
        className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 p-4 space-y-3"
      >
        <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
          Add Attendance Entry
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <input
            type="text"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="Student ID (e.g. 242-15-596)"
            aria-label="Student ID"
            className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Full Name"
            aria-label="Full Name"
            className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            aria-label="Course"
            className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="CSE-311 (DBMS)">CSE-311 (DBMS)</option>
            <option value="CSE-321 (Software Eng.)">CSE-321 (Software Eng.)</option>
            <option value="CSE-331 (Compiler)">CSE-331 (Compiler)</option>
          </select>
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as 'Present' | 'Absent' | 'Late')
            }
            aria-label="Attendance Status"
            className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Present">Present</option>
            <option value="Late">Late</option>
            <option value="Absent">Absent</option>
          </select>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" aria-hidden="true" />
            <span>Add Entry</span>
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <label htmlFor="sms-date">Date:</label>
            <input
              id="sms-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-2 py-1 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-xs"
            />
          </div>
          {formError && (
            <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400 font-medium">
              <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
              {formError}
            </span>
          )}
        </div>
      </form>

      {/* Attendance List & Filter */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Attendance Records ({filteredRecords.length})
          </p>
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            aria-label="Filter by course"
            className="px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-xs font-medium text-zinc-800 dark:text-zinc-200"
          >
            <option value="All">All Courses</option>
            <option value="CSE-311 (DBMS)">CSE-311 (DBMS)</option>
            <option value="CSE-321 (Software Eng.)">CSE-321 (Software Eng.)</option>
            <option value="CSE-331 (Compiler)">CSE-331 (Compiler)</option>
          </select>
        </div>

        <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
                <th className="py-2.5 px-3.5">Student ID</th>
                <th className="py-2.5 px-3.5">Name</th>
                <th className="py-2.5 px-3.5">Course</th>
                <th className="py-2.5 px-3.5">Date</th>
                <th className="py-2.5 px-3.5">Status</th>
                <th className="py-2.5 px-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {filteredRecords.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400"
                  >
                    No attendance records match this filter.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 transition-colors"
                  >
                    <td className="py-2.5 px-3.5 font-mono text-xs text-zinc-800 dark:text-zinc-200 tabular-nums whitespace-nowrap">
                      {row.studentId}
                    </td>
                    <td className="py-2.5 px-3.5 font-medium text-zinc-950 dark:text-zinc-100 whitespace-nowrap">
                      {row.studentName}
                    </td>
                    <td className="py-2.5 px-3.5 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                      {row.course}
                    </td>
                    <td className="py-2.5 px-3.5 font-mono text-xs text-zinc-600 dark:text-zinc-400 tabular-nums whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="py-2.5 px-3.5 whitespace-nowrap">
                      <span
                        className={`text-xs font-semibold ${
                          row.status === 'Present'
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : row.status === 'Late'
                            ? 'text-amber-700 dark:text-amber-400'
                            : 'text-rose-700 dark:text-rose-400'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-3.5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => handleDelete(row.id)}
                        aria-label={`Delete attendance record for ${row.studentName}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-rose-700 dark:text-rose-400 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

interface TokenResult {
  line: number;
  lexeme: string;
  type: 'KEYWORD' | 'IDENTIFIER' | 'NUMBER' | 'OPERATOR' | 'DELIMITER' | 'STRING';
}

const COMPILER_PRESETS: Record<string, string> = {
  'Variable & Condition': `int runs = 84;\nfloat strikeRate = 142.5;\nif (runs >= 50) {\n  return runs + 6;\n}`,
  'Loop Accumulation': `int total = 0;\nfor (int over = 1; over <= 20; over++) {\n  total = total + 8;\n}`,
  'Syntax Error Case': `int score = 120\nif (score > 100) {\n  return score;\n`,
};

const KEYWORDS = new Set([
  'int',
  'float',
  'double',
  'char',
  'if',
  'else',
  'for',
  'while',
  'return',
  'void',
]);

function tokenizeSource(source: string): {
  tokens: TokenResult[];
  diagnostics: { valid: boolean; messages: string[] };
} {
  const tokens: TokenResult[] = [];
  const lines = source.split('\n');
  const tokenRegex =
    /("[^"]*"|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_]*\b|>=|<=|==|!=|\+\+|--|[+\-*/=<>]|[;{}()])/g;

  lines.forEach((lineText, idx) => {
    let match: RegExpExecArray | null;
    while ((match = tokenRegex.exec(lineText)) !== null) {
      const lexeme = match[0];
      let type: TokenResult['type'] = 'IDENTIFIER';
      if (lexeme.startsWith('"')) {
        type = 'STRING';
      } else if (/^\d/.test(lexeme)) {
        type = 'NUMBER';
      } else if (KEYWORDS.has(lexeme)) {
        type = 'KEYWORD';
      } else if (/^(>=|<=|==|!=|\+\+|--|[+\-*/=<>])$/.test(lexeme)) {
        type = 'OPERATOR';
      } else if (/^[;{}()]$/.test(lexeme)) {
        type = 'DELIMITER';
      }
      tokens.push({ line: idx + 1, lexeme, type });
    }
  });

  const messages: string[] = [];
  let braceBalance = 0;
  let parenBalance = 0;

  for (const t of tokens) {
    if (t.lexeme === '{') braceBalance++;
    if (t.lexeme === '}') braceBalance--;
    if (t.lexeme === '(') parenBalance++;
    if (t.lexeme === ')') parenBalance--;
  }

  if (braceBalance !== 0) {
    messages.push('Syntax Error (Bison): Unbalanced curly braces { } detected.');
  }
  if (parenBalance !== 0) {
    messages.push('Syntax Error (Bison): Unbalanced parentheses ( ) detected.');
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (
      trimmed.length > 0 &&
      !trimmed.endsWith(';') &&
      !trimmed.endsWith('{') &&
      !trimmed.endsWith('}')
    ) {
      messages.push(
        `Line ${index + 1}: Missing terminating ';' or block delimiter.`
      );
    }
  });

  return {
    tokens,
    diagnostics: {
      valid: messages.length === 0 && tokens.length > 0,
      messages:
        messages.length === 0
          ? ['Grammar check passed: 0 syntax errors detected by parser.']
          : messages,
    },
  };
}

function CompilerLexerDemo() {
  const [selectedPreset, setSelectedPreset] = useState('Variable & Condition');
  const [sourceCode, setSourceCode] = useState(
    COMPILER_PRESETS['Variable & Condition']
  );

  const analysis = useMemo(() => tokenizeSource(sourceCode), [sourceCode]);

  const handlePreset = (key: string) => {
    setSelectedPreset(key);
    setSourceCode(COMPILER_PRESETS[key]);
  };

  return (
    <div className="space-y-5">
      {/* Preset Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Select Sample Input:
        </span>
        <div className="flex flex-wrap items-center gap-1.5">
          {Object.keys(COMPILER_PRESETS).map((presetKey) => (
            <button
              key={presetKey}
              type="button"
              onClick={() => handlePreset(presetKey)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedPreset === presetKey
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white dark:text-zinc-950'
                  : 'border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              {presetKey}
            </button>
          ))}
        </div>
      </div>

      {/* Editor + Diagnostics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5 space-y-2">
          <label
            htmlFor="lexer-source"
            className="block text-xs font-medium text-zinc-600 dark:text-zinc-400"
          >
            Source Input (C-like subset)
          </label>
          <textarea
            id="lexer-source"
            rows={7}
            value={sourceCode}
            onChange={(e) => setSourceCode(e.target.value)}
            spellCheck={false}
            className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-950 text-emerald-300 font-mono text-xs sm:text-sm p-3.5 leading-relaxed focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Parser Diagnostic Box */}
          <div
            className={`rounded-xl border p-3 text-xs space-y-1 ${
              analysis.diagnostics.valid
                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300'
                : 'border-rose-500/30 bg-rose-500/10 text-rose-800 dark:text-rose-300'
            }`}
          >
            <div className="flex items-center gap-2 font-semibold">
              {analysis.diagnostics.valid ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              )}
              <span>
                {analysis.diagnostics.valid
                  ? 'Parse Accepted'
                  : 'Syntax Diagnostic'}
              </span>
            </div>
            {analysis.diagnostics.messages.map((msg) => (
              <p key={msg} className="font-mono leading-relaxed">
                {msg}
              </p>
            ))}
          </div>
        </div>

        {/* Token Stream Table */}
        <div className="lg:col-span-7 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400">
            <span className="font-medium">Lexical Token Stream (Flex Output)</span>
            <span className="font-mono tabular-nums">
              {analysis.tokens.length} tokens
            </span>
          </div>

          <div className="max-h-72 overflow-y-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="sticky top-0 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                <tr>
                  <th className="py-2 px-3">Line</th>
                  <th className="py-2 px-3">Lexeme</th>
                  <th className="py-2 px-3">Token Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 font-mono">
                {analysis.tokens.map((tok, i) => (
                  <tr
                    key={`${tok.line}-${tok.lexeme}-${i}`}
                    className="hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                  >
                    <td className="py-1.5 px-3 text-zinc-500 tabular-nums">
                      {tok.line}
                    </td>
                    <td className="py-1.5 px-3 text-zinc-950 dark:text-zinc-100 font-semibold">
                      {tok.lexeme}
                    </td>
                    <td className="py-1.5 px-3 text-emerald-700 dark:text-emerald-400">
                      {tok.type}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectDemoModal({ project, onClose }: ProjectDemoModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090d] text-zinc-900 dark:text-zinc-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 sm:px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#09090d]/95 backdrop-blur-md">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
              <Terminal className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3
                id="demo-modal-title"
                className="font-display text-base sm:text-lg font-bold truncate"
              >
                {project.title} — Interactive Demo
              </h3>
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 truncate">
                {project.stackLabel}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close demo modal"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {project.id === 'sms' ? <SmsAttendanceDemo /> : <CompilerLexerDemo />}
        </div>
      </div>
    </div>
  );
}
