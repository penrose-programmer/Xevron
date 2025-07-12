import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://qqnhhrgslyvbjnrigcvj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxbmhocmdzbHl2YmpucmlnY3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNDAyODQsImV4cCI6MjA2NzYxNjI4NH0.UzV5sIHuRDKeAbQALGa8KowEEx3FRiJ5hUMuWw7RR6E',
)

import type { Session } from '@supabase/supabase-js'

export const Route = createFileRoute('/login')({
  component: Login,
})

export default function Login() {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])
  if (!session) {
    return null
  } else {
    return <div>Logged in!</div>
  }
}
