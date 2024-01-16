import CrossIcon from "./CrossIcon";

const Chip = ({ user, removeSelectedUser, highlightedUser }) => {
  return (
    <div
      className={`${
        highlightedUser?.id === user?.id
          ? "bg-zepto-purple bg-opacity-[15%] border-opacity-50 border border-zepto-purple"
          : "bg-grey"
      } rounded-full flex items-center gap-x-2 p-1 pr-[6px] duration-100`}
    >
      <div className="h-6 w-6 rounded-full bg-zepto-purple">
        <user.avatar className="w-6 h-6" />
      </div>

      <div className="font-medium text-sm text-zepto-purple flex-1">
        {user?.name}
      </div>

      <div
        className="cursor-pointer"
        onMouseDown={(e) => {
          e?.preventDefault();
          removeSelectedUser(user);
        }}
      >
        <CrossIcon size={20} />
      </div>
    </div>
  );
};

export default Chip;
