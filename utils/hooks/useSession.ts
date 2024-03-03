import { AuthSession } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'

export function useSession() {
  const [session, setSession] = useState<AuthSession | null>(null)

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Error getting session:', error)
        throw error
      }

      if (data) setSession(data.session) 
      else setSession(null)
    })()

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return session
}
