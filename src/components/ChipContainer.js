import { useCallback, useEffect, useRef, useState } from "react";
import Chip from "./Chip";
import UserDropdownItem from "./UserDropdownItem";

const userList = [
  { id: 1, name: "User name 1", email: "user1@example.com" },
  { id: 2, name: "User name 2", email: "user2@example.com" },
  { id: 3, name: "User name 3", email: "user3@example.com" },
  { id: 4, name: "User name 4", email: "user4@example.com" },
  { id: 5, name: "User name 5", email: "user5@example.com" },
  { id: 6, name: "User name 6", email: "user6@example.com" },
  { id: 7, name: "User name 7", email: "user7@example.com" },
  { id: 8, name: "User name 8", email: "user8@example.com" },
];

const ChipContainer = () => {
  const userInputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [dropdownUsers, setDropdownUsers] = useState(userList);
  const [inputValue, setInputValue] = useState("");
  const [highlightedUser, setHighLightedUser] = useState({});

  const listSort = useCallback((a, b) => {
    if (a?.id < b?.id) {
      return -1;
    } else if (a?.id > b?.id) {
      return 1;
    } else return 0;
  }, []);

  const selectUser = useCallback(
    (user) => {
      const existing = dropdownUsers;
      const remaining = existing?.filter((eUser) => eUser?.id !== user?.id);
      setDropdownUsers(remaining);

      setSelectedUsers([...selectedUsers, user]);
      setHighLightedUser({});
      setInputValue("");
    },
    [selectedUsers, dropdownUsers]
  );

  const removeSelectedUser = useCallback(
    (user, deleteFromBackspace = false) => {
      const existing = selectedUsers;
      const remaining = existing?.filter((eUser) => eUser?.id !== user?.id);
      setSelectedUsers(remaining);

      setDropdownUsers([...dropdownUsers, user]?.sort(listSort));

      if (deleteFromBackspace) {
        setHighLightedUser(remaining?.[remaining?.length - 1]);
      } else {
        userInputRef?.current?.focus();
        setHighLightedUser({});
      }
    },
    [selectedUsers, dropdownUsers]
  );

  const handleKeyInput = useCallback(
    (e) => {
      e?.stopPropagation();

      if (e?.code === "Backspace" && userInputRef?.current?.value === "") {
        userInputRef?.current?.blur();
        if (highlightedUser?.id) {
          removeSelectedUser(highlightedUser, true);
        } else {
          setHighLightedUser(selectedUsers?.[selectedUsers?.length - 1]);
        }
      }
    },
    [selectedUsers, highlightedUser]
  );

  const chipMap = useCallback(
    (user) => (
      <Chip
        key={user?.id}
        user={user}
        removeSelectedUser={removeSelectedUser}
        highlightedUser={highlightedUser}
      />
    ),
    [selectedUsers, removeSelectedUser, highlightedUser]
  );

  const userDropdownItemMap = useCallback(
    (user) => (
      <UserDropdownItem key={user?.id} user={user} selectUser={selectUser} />
    ),
    [selectUser]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyInput);

    return () => {
      window.removeEventListener("keydown", handleKeyInput);
    };
  }, [highlightedUser, selectedUsers]);

  return (
    <div className="border-b-[4px] border-zepto-purple py-1">
      <div className="flex items-center w-full gap-2 flex-wrap">
        {selectedUsers?.map(chipMap)}

        <div className="relative md:w-2/5 w-full">
          {dropdownUsers?.length > 0 ? (
            <input
              ref={userInputRef}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setShowDropdown(false)}
              className="w-full flex focus:outline-none"
              placeholder="Add new user"
              value={inputValue}
              onChange={(e) => setInputValue(e?.target?.value)}
              onKeyDown={handleKeyInput}
            />
          ) : null}

          {showDropdown ? (
            <div className="absolute min-w-full max-w-max bg-white shadow-md max-h-[208px] overflow-scroll rounded-sm flex flex-col">
              {dropdownUsers?.map(userDropdownItemMap)}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChipContainer;
