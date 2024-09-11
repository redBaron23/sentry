import { NotificationBell } from "@/components/molecules/notification-bell";
import { UserMenu } from "../user-menu";

interface HeaderActionsProps {
  notificationCount: number;
  userInitials: string;
  userImage?: string;
}

export function HeaderActions({
  notificationCount,
  userInitials,
  userImage,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-2 rounded-full bg-secondary/50 p-1">
      <NotificationBell initialCount={notificationCount} />
      <UserMenu userInitials={userInitials} userImage={userImage} />
    </div>
  );
}
