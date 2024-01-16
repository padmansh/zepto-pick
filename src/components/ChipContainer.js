import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Chip from "./Chip";
import UserDropdownItem from "./UserDropdownItem";
import Avatar1 from "../Icons/Avatar1";
import Avatar2 from "../Icons/Avatar2";
import Avatar3 from "../Icons/Avatar3";
import Avatar4 from "../Icons/Avatar4";
import Avatar5 from "../Icons/Avatar5";
import Avatar6 from "../Icons/Avatar6";
import Avatar7 from "../Icons/Avatar7";
import Avatar8 from "../Icons/Avatar8";

const userList = [
  {
    id: 1,
    name: "Mary Baker",
    email: "mary.baker@example.com",
    avatar: Avatar1,
  },
  {
    id: 2,
    name: "Eunice Kennedy",
    email: "eunice.kennedy@example.com",
    avatar: Avatar2,
  },
  {
    id: 3,
    name: "Harriet Tubman",
    email: "harriet.tubman@example.com",
    avatar: Avatar3,
  },
  {
    id: 4,
    name: "Wilma Mankiller",
    email: "wilma.mankiller@example.com",
    avatar: Avatar4,
  },
  {
    id: 5,
    name: "Mother Frances",
    email: "mother.frances@example.com",
    avatar: Avatar5,
  },
  {
    id: 6,
    name: "Fannie Lou",
    email: "fannie.lou@example.com",
    avatar: Avatar6,
  },
  {
    id: 7,
    name: "Elizabeth Blackwell",
    email: "elizabeth.blackwell@example.com",
    avatar: Avatar7,
  },
  {
    id: 8,
    name: "Rosalyn Yalow",
    email: "rosalyn.yalow@example.com",
    avatar: Avatar8,
  },
];

const ChipContainer = () => {
  const userInputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [dropdownUsers, setDropdownUsers] = useState(userList);
  const [inputValue, setInputValue] = useState("");
  const [highlightedUser, setHighLightedUser] = useState({});

  const searchedDropdownUsers = useMemo(
    () =>
      dropdownUsers?.filter(
        (user) =>
          user?.name?.toLowerCase()?.includes(inputValue) ||
          user?.email?.toLowerCase()?.includes(inputValue)
      ),
    [dropdownUsers, inputValue]
  );

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
        setHighLightedUser({});
        setTimeout(() => userInputRef?.current?.focus(), 0);
      }
    },
    [selectedUsers, dropdownUsers, listSort]
  );

  const handleKeyInput = useCallback(
    (e) => {
      e?.stopPropagation();

      if (e?.keyCode === 8 && userInputRef?.current?.value === "") {
        userInputRef?.current?.blur();
        if (highlightedUser?.id) {
          removeSelectedUser(highlightedUser, true);
        } else {
          setHighLightedUser(selectedUsers?.[selectedUsers?.length - 1]);
        }
      }
    },
    [selectedUsers, highlightedUser, removeSelectedUser]
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
    [removeSelectedUser, highlightedUser]
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
  }, [handleKeyInput]);

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
              onChange={(e) => {
                setInputValue(e?.target?.value);
                setHighLightedUser({});
              }}
              onKeyDown={handleKeyInput}
            />
          ) : null}

          {showDropdown ? (
            <div className="absolute min-w-full max-w-max bg-white shadow-md max-h-[208px] overflow-scroll rounded-sm flex flex-col">
              {searchedDropdownUsers?.map(userDropdownItemMap)}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChipContainer;
