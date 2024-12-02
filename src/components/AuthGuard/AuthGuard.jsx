import { useEffect } from "react";
import { supabase } from "./supabaseClient";

const AuthListener = () => {
  useEffect(() => {
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth event:", event);
        console.log("User session:", session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return null;
};

export default AuthListener;
