import Image from 'next/image';
import { useEffect, useState } from 'react';
const Message = ({ avatar, text: initialText, idx, author }) => {
  const [text, setText] = useState(author === 'ai' ? '' : initialText);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(initialText.slice(0, text.length + 1));
    }, 25);

    return () => clearTimeout(timeout);
  });
  const bgColorClass = idx % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200';

  const blinkingCursorClass =
    initialText.length === text.length ? '' : 'blinking-cursor';
  return (
    <div className={`flex flex-row ${bgColorClass} p-4 items-center`}>
      <div className="w-[30px] relative m-4">
        <Image src={avatar} className="mr-4" width={30} height={30} alt="" />
      </div>
      <div className="w-full">
        <div className={blinkingCursorClass}>{text}</div>
      </div>
    </div>
  );
};

export default Message;
