import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import { usePersona } from '../PersonaContext'
import { personaTokens } from '../tokens'

interface FaqItem {
  q: string
  a: string
}

const FAQS: FaqItem[] = [
  {
    q: 'Tại sao không dùng thẳng ChatGPT cho rẻ?',
    a: 'ChatGPT trả lời câu hỏi. Learneris ra sản phẩm hoàn chỉnh: bài kiểm tra với cấu trúc theo Bloom + chuẩn đầu ra của VN, slide có template, lớp học có tự chấm + theo dõi tiến độ, hồ sơ năng lực gắn liền học sinh xuyên năm. ChatGPT là công cụ; Learneris là hệ thống có hành trình.',
  },
  {
    q: 'Có chuẩn không? Trường có dùng được chính thức không?',
    a: 'Chương trình K-12 đã được VNIES (Viện Khoa học Giáo dục Việt Nam) thẩm định, phù hợp Khung năng lực AI của UNESCO và Chương trình GDPT 2018. Nhiều trường dùng Learneris làm phần chính thức của môn Tin học hoặc hoạt động trải nghiệm.',
  },
  {
    q: 'Bảo mật dữ liệu học sinh thế nào?',
    a: 'Tất cả dữ liệu lưu trên Azure Việt Nam, tuân thủ Nghị định 13/2023 về bảo vệ dữ liệu cá nhân. Học sinh dưới 16 tuổi cần phụ huynh xác nhận. Output AI không huấn luyện model, chỉ dùng trong phiên. Trường có thể yêu cầu xoá hoặc xuất dữ liệu bất cứ lúc nào.',
  },
  {
    q: 'Trường tôi triển khai như thế nào?',
    a: 'Có 3 hình thức: (1) Tự đăng ký free cho cá nhân giáo viên — dùng ngay; (2) Pilot 1 lớp/1 khối — Learneris hỗ trợ setup + training trong 1 tuần; (3) Cả trường — có manager riêng + dashboard hiệu trưởng + tích hợp SSO/LMS hiện hữu. Liên hệ để được tư vấn.',
  },
  {
    q: 'Có miễn phí không?',
    a: 'Giáo viên cá nhân: free hoàn toàn cho các Mini App cơ bản (Quiz, Study Guide, vài chục lần gen/tháng). Premium cho người cần volume cao hơn. Học sinh: free khi trường đăng ký pilot. Phụ huynh: dashboard theo dõi con — free khi con đã ở trong trường có đăng ký.',
  },
  {
    q: 'Khác gì so với các nền tảng AI giáo dục khác?',
    a: 'Khác về chiều rộng (5 bề mặt thay vì 1 tool catalog) và chiều sâu Việt Nam (curriculum mapping theo GDPT 2018, voice + UI tiếng Việt, hỗ trợ qua Zalo, hợp tác với VNIES). Học sinh không chỉ học AI — học sinh ship app AI thật, có 735+ app do học sinh K-12 Việt Nam tự xây.',
  },
]

export function FaqV3() {
  const { persona } = usePersona()
  const tokens = personaTokens(persona)
  const prefersReducedMotion = useReducedMotion()
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="relative py-20 lg:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest"
            style={{ color: tokens.accent }}
          >
            <MessageCircleQuestion className="w-3.5 h-3.5" />
            Câu hỏi thường gặp
          </motion.div>
          <h2 className="font-extrabold tracking-tight text-text" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: 1.2 }}>
            Câu hỏi bạn có thể đang nghĩ
          </h2>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border transition-colors"
                style={{ borderColor: isOpen ? tokens.ring : 'rgba(15,23,42,0.08)' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ ['--tw-ring-color' as string]: tokens.ring }}
                >
                  <span className="text-sm sm:text-base font-semibold text-text">{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 shrink-0 transition-transform duration-300"
                    style={{
                      color: isOpen ? tokens.accent : '#9ca3af',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
