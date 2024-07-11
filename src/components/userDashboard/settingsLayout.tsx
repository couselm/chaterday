import React, { useState } from 'react'
import { Image } from 'lucide-react'
import { Separator } from '../ui/separator'
import { SidebarNav } from './components/sidebar-nav'
import { ProfileForm } from './profile-form' // Adjust the import paths as needed
import SettingsAccountPage from './account/page' // Ensure these components are created
import SettingsAppearancePage from './appearance/page'
import SettingsNotificationsPage from './notifications/page'
import SettingsDisplayPage from './display/page'

const sidebarNavItems = [
  {
    title: 'Profile',
    component: <ProfileForm />,
  },
  {
    title: 'Account',
    component: <SettingsAccountPage />,
  },
  {
    title: 'Appearance',
    component: <SettingsAppearancePage />,
  },
  {
    title: 'Notifications',
    component: <SettingsNotificationsPage />,
  },
  {
    title: 'Display',
    component: <SettingsDisplayPage />,
  },
]

export default function SettingsLayout() {
  const [activeComponent, setActiveComponent] = useState(<ProfileForm />)

  return (
    <>
      <div className="md:hidden">
        <Image src="/examples/forms-light.png" width={1280} height={791} alt="Forms" className="block dark:hidden" />
        <Image src="/examples/forms-dark.png" width={1280} height={791} alt="Forms" className="hidden dark:block" />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} setActiveComponent={setActiveComponent} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{activeComponent}</div>
        </div>
      </div>
    </>
  )
}
