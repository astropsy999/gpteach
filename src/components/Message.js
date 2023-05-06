import Image from 'next/image';
const Message = ({ avatar, text, idx }) => {
  const bgColorClass = idx % 2 === 0 ? 'bg-slate-100' : 'bg-slate-200';
  return (
    <div className={`flex flex-row ${bgColorClass} p-4 items-center`}>
      <div className="w-[30px] relative m-4">
        <Image src={avatar} className="mr-4" width={30} height={30} alt="" />
      </div>
      <div className="w-full">{text}</div>
    </div>
  );
};

export default Message;
