import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [session, setSession] = useState(undefined);

    //signup function
    const signup = async (email, password, confirmPassword) => {
        if(password !== confirmPassword){
            return {success : false, error : 'Passwords do not match'};
        }
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            confromPassword: confirmPassword
        });
        if (error) {
            console.error('Error signing up:', error);
            return {success : false, error };
        } else {
            console.log('Signed up:', data);
            return {success : true, data };
        }
    }
    
    useEffect(() => {
        supabase.auth.getSession().then(({ data: {session} }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

    }, []);
    
    //signout function
    const signout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error signing out:', error);
            return {success : false, error };
        } else {
            console.log('Signed out');
            return {success : true};
        }
    }

    //login function
    const login = async (email, password) => {
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email : email,
                password : password
            });

            if (error) {
                console.error('Error logging in:', error);
                return {success : false, error: error.message };
            }
            console.log('login successful:', data);
            return {success : true, data };

        } catch(error) {
            console.error('Error logging in:', error);
            
        }
    }

    return(

        <AuthContext.Provider value={{ session, signup, signout, login }}>
            {children}
        </AuthContext.Provider>

    )

}

export function userAuth() {
    return useContext(AuthContext);
}
