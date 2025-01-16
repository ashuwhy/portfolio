'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface NoteItem {
  emoji: string;
  title: string;
  preview: string;
  date: string;
  href: string;
}

const Sidebar: FC = () => {
  const pathname = usePathname();

  const pinnedNotes: NoteItem[] = [
    {
      emoji: '👋',
      title: 'about me',
      preview: 'hey there! i\'m...',
      date: '03/01/2025',
      href: '/about-me'
    }
  ];

  const todayNotes: NoteItem[] = [
    {
      emoji: '🔗',
      title: 'links',
      preview: 'not super acti...',
      date: '05/01/2025',
      href: '/links'
    }
  ];

  const olderNotes: NoteItem[] = [
    {
      emoji: '📚',
      title: 'reading',
      preview: 'books i\'m curr...',
      date: '02/12/2024',
      href: '/reading'
    },
    {
      emoji: '💻',
      title: 'tech stack',
      preview: 'a detailed look...',
      date: '12/12/2024',
      href: '/tech-stack'
    }
  ];

  const NoteItem: FC<{ note: NoteItem }> = ({ note }) => (
    <div className={`note-item ${pathname === note.href ? 'active' : ''}`}>
      <Link href={note.href} className="flex gap-3 p-3.5 items-center h-[76px]">
        <span className="emoji flex items-center justify-center w-8 h-8 bg-[#2a2a2a] rounded-lg text-lg">
          {note.emoji}
        </span>
        <div className="note-content flex flex-col justify-center gap-1 min-w-0 flex-1">
          <div className="font-medium text-base">{note.title}</div>
          <div className="preview text-sm text-[#888] flex gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
            <div className="date">{note.date}</div>
            {note.preview}
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="sidebar fixed w-[260px] h-screen bg-[#1a1a1a] border-r border-[#333] overflow-y-auto">
      <div className="notes">
        <div className="notes-header flex justify-between items-center p-3">
          <h2 className="text-3xl font-kugile font-normal m-[10px_22px]">Notes</h2>
        </div>

        <div className="pinned px-4 py-3 text-xs text-[#888] font-semibold flex items-center gap-2 mx-[22px] uppercase tracking-wider">
          <i className="fas fa-thumbtack text-xs" />
          pinned
        </div>

        <div className="note-items mx-[22px]">
          {pinnedNotes.map((note) => (
            <NoteItem key={note.href} note={note} />
          ))}
        </div>

        <div className="today px-4 py-3 text-xs text-[#888] font-semibold mx-[22px] uppercase tracking-wider">
          today
        </div>

        <div className="note-items mx-[22px]">
          {todayNotes.map((note) => (
            <NoteItem key={note.href} note={note} />
          ))}
        </div>

        <div className="older px-4 py-3 text-xs text-[#888] font-semibold mx-[22px] uppercase tracking-wider">
          older
        </div>

        <div className="note-items mx-[22px]">
          {olderNotes.map((note) => (
            <NoteItem key={note.href} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 