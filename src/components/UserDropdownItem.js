const UserDropdownItem = ({ user, selectUser }) => {
  return (
    <div
      onMouseDown={(e) => {
        e?.preventDefault();
        selectUser(user);
      }}
      className="flex items-center gap-x-2 hover:bg-[#e4e4e4] duration-300 px-3 py-2 cursor-pointer"
    >
      <div className="h-9 w-9 rounded-full bg-zepto-purple" />

      <div className="font-medium text-sm text-zepto-purple ml-2">
        {user?.name}
      </div>

      <div className="font-medium text-xs text-zepto-purple opacity-60">
        {user?.email}
      </div>
    </div>
  );
};

export default UserDropdownItem;
