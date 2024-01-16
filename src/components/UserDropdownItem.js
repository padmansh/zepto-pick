const UserDropdownItem = ({ user, selectUser }) => {
  return (
    <div
      onMouseDown={(e) => {
        e?.preventDefault();
        selectUser(user);
      }}
      className="flex items-center gap-x-2 hover:bg-zepto-purple hover:bg-opacity-10 duration-300 px-3 py-2 cursor-pointer"
    >
      <user.avatar className="h-9 w-9" />

      <div className="font-medium text-sm text-zepto-purple ml-2 flex-1 shrink-0">
        {user?.name}
      </div>

      <div className="font-medium text-xs text-zepto-purple opacity-60 text-ellipsis max-w-[120px] overflow-hidden">
        {user?.email}
      </div>
    </div>
  );
};

export default UserDropdownItem;
