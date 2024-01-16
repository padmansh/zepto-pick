import CrossIcon from "./CrossIcon";

const Chip = ({ user, removeSelectedUser, highlightedUser }) => {
  return (
    <div
      className={`${
        highlightedUser?.id === user?.id ? "bg-red-100" : "bg-[#e4e4e4]"
      } rounded-full flex items-center gap-x-2 p-1 pr-[6px]`}
    >
      <div className="h-6 w-6 rounded-full bg-zepto-purple" />

      <div className="font-medium text-sm text-zepto-purple flex-1">
        {user?.name}
      </div>

      <div className="cursor-pointer" onClick={() => removeSelectedUser(user)}>
        <CrossIcon size={20} />
      </div>
    </div>
  );
};

export default Chip;
