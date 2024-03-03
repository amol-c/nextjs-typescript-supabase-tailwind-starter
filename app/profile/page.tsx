"use client"
import { Layout } from '../../components/Layout'
import { ProfileForm } from '../../components/ProfileForm'
import { useSession } from '../../utils/hooks/useSession'

export default function ProfilePage() {
  const session = useSession()

  if (!session) return (<>User is not logged in</>)

  return (
    <Layout session={session}>
      <ProfileForm session={session} />
    </Layout>
  )
}
