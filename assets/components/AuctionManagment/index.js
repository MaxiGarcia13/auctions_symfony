import React, {memo, useMemo} from 'react';
import AuctionManagment from "./AuctionManagment.component";
import UserAuction from "./UserAuction.component";

import { useSelector } from "react-redux";
import { loggedUserSelector } from "../../selectors/loggedUser";


const EntryPointComponent = ()=> {

    const loggedUser = useSelector(loggedUserSelector);

    const isAdmin = useMemo(() => {
        if (Array.isArray(loggedUser.roles) && loggedUser.roles.length) {
            return loggedUser.roles.some((role) => role === 'ADMINISTRATOR');
        } else {
            return false;
        }
    }, [loggedUser]);

    return isAdmin? <AuctionManagment/> : <UserAuction  user_id={loggedUser.id}/>

}

export default memo(EntryPointComponent);