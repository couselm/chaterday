import { useTranslation } from 'react-i18next'
import { ChatLayout } from 'src/components/chat/ChatLayout'
export default function Home() {
  const { t } = useTranslation('translation')
  return <ChatLayout defaultCollapsed={true} navCollapsedSize={8} />
}
