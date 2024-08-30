import { supabase } from "@/lib/supabase";
import { useEffect, useState, createContext, useContext } from "react"

interface UserContextProps {
    userID: string | undefined
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const getSessionUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    console.log('got user id', user?.id);
    return user;
};

export const getSessionUserID = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user?.id;
};

export const signOutUser = async () => {
    const { error } = await supabase.auth.signOut()
    if (error){
        console.log('error signing out', error);
    }
}

export default function UserProvider({ children }: { children: any }) {
    const [userID, setUserID] = useState<string | undefined>('')

    useEffect(() => {
        const fetchSession = async () => {
            const userID = await getSessionUserID();
            setUserID(userID);
        }
        fetchSession();
        // const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
        //     fetchSession();
        // });
    }, []);

    const exposed = { userID }

    return (
        <UserContext.Provider value={exposed}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => { return useContext(UserContext) };