import { NotificationBell } from '@/components/molecules/notification-bell'
import { getUserFromServer } from '@/lib/supabase/server'
import { getUserInitials } from '@/lib/utils'
import { UserMenu } from '../user-menu'

interface Props {}

export async function HeaderActions({}: Props) {
  const user = await getUserFromServer()

  const userInitials = getUserInitials(user?.user_metadata.name)
  const userImageSrc = user?.user_metadata.picture

  return (
    <div className="flex items-center space-x-2 rounded-full bg-secondary/50 p-1">
      <NotificationBell initialCount={3} />
      <UserMenu userInitials={userInitials} userImage={userImageSrc} />
    </div>
  )
}
