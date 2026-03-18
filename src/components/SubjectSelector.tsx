import { Calculator, Atom, BookOpen } from 'lucide-react';
import { Subject } from '../types';

interface SubjectSelectorProps {
  selectedSubject: Subject;
  onSubjectChange: (subject: Subject) => void;
}

export function SubjectSelector({ selectedSubject, onSubjectChange }: SubjectSelectorProps) {
  const subjects: { id: Subject; name: string; icon: JSX.Element; color: string }[] = [
    { id: 'math', name: 'Math', icon: <Calculator size={24} />, color: 'from-blue-400 to-blue-600' },
    { id: 'science', name: 'Science', icon: <Atom size={24} />, color: 'from-green-400 to-green-600' },
    { id: 'general', name: 'General', icon: <BookOpen size={24} />, color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {subjects.map((subject) => (
        <button
          key={subject.id}
          onClick={() => onSubjectChange(subject.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-lg transform transition hover:scale-105 active:scale-95 ${
            selectedSubject === subject.id
              ? `bg-gradient-to-r ${subject.color} text-white`
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {subject.icon}
          {subject.name}
        </button>
      ))}
    </div>
  );
}
