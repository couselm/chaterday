import { useTranslation } from 'react-i18next'
import { ChatLayout } from 'src/components/chat/ChatLayout'
export default function Home() {
  const { t } = useTranslation('translation')
  return (
    <div className="mt-24 h-screen">
      <ChatLayout defaultLayout={[320, 480]} defaultCollapsed={false} navCollapsedSize={8} />
    </div>
  )
}
