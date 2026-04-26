import { LegalPage } from '../components/LegalPage'
import { useTranslation } from '../i18n'

function PrivacyContentEn() {
  return (
    <>
      <p>
        Learneris Pte. Ltd. ("Learneris", "we", "us") is committed to protecting your
        privacy. This Privacy Policy describes how we collect, use, store, share, and
        protect your personal data when you use any product in the Learneris family of
        services.
      </p>

      <hr />

      <h2>1. Scope &amp; Application</h2>
      <p>
        This Privacy Policy applies to any website, application, or service operated
        by Learneris under the learneris.com domain or any of its subdomains (for
        example,{' '}
        <a href="https://www.learneris.com">learneris.com</a>,{' '}
        <a href="https://studio.learneris.com">studio.learneris.com</a>, and{' '}
        <a href="https://ai.learneris.com">ai.learneris.com</a>), together with any
        tools or services subsequently released by Learneris (collectively, the
        "Services"). It applies to all users — educational institutions, teachers,
        lecturers, content creators, parents, and students.
      </p>
      <p>
        Where a school or institution uses the Services to manage its own students,
        the institution is the "controller" of that data and Learneris acts as a
        "processor" on the institution's instructions.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> name, email address, role (teacher,
          student, parent, administrator), institution affiliation, and password (stored
          as a one-way hash).
        </li>
        <li>
          <strong>Content you create or upload:</strong> lesson plans, study guides,
          quizzes, slides, images, prompts, and any other content you input or generate
          through the Services.
        </li>
        <li>
          <strong>Usage data:</strong> features used, content created, time spent, and
          frequency of access.
        </li>
        <li>
          <strong>Technical information:</strong> IP address, browser type, operating
          system, device information, and a session cookie used to keep you signed in.
        </li>
        <li>
          <strong>Student data:</strong> when a school or parent enrols a student, we
          may receive name, year/grade level, class assignment, and learning progress.
          We treat student data as sensitive and protect it under COPPA, FERPA, and
          applicable national child-data laws where they apply.
        </li>
        <li>
          <strong>LMS launch data:</strong> when you launch a Learneris activity from a
          third-party Learning Management System (such as Moodle, Canvas, or Google
          Classroom) using the LTI 1.3 standard, we receive your name, email address,
          role, and the course/assignment context from your LMS. This data is used only
          to identify you for the launched session and to return scores when supported.
        </li>
        <li>
          <strong>Payment information:</strong> if you purchase paid Services, our
          payment processor collects payment-method details. Learneris itself does not
          store full card numbers.
        </li>
      </ul>

      <h2>3. How We Use Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and maintain the Services.</li>
        <li>Generate AI content on your request (see § 5).</li>
        <li>Personalise your experience and recommend relevant features.</li>
        <li>Provide customer support and respond to your enquiries.</li>
        <li>Detect, prevent, and address fraud, abuse, security incidents, and policy violations.</li>
        <li>Comply with legal obligations, court orders, and regulatory requirements.</li>
        <li>
          Improve the Services through aggregated, de-identified analytics. We do not
          use your inputs or generated content to train the underlying AI models we
          rely on, and we contract our AI providers to the same restriction.
        </li>
      </ul>

      <h2>4. Legal Bases for Processing (EU/UK Users)</h2>
      <p>
        Where the GDPR or UK GDPR applies, we process your personal data on one or more
        of the following legal bases: (a) performance of a contract with you; (b) your
        consent; (c) our legitimate interests in operating and improving the Services;
        and (d) compliance with legal obligations.
      </p>

      <h2>5. AI-Generated Content &amp; AI Service Providers</h2>
      <p>
        Some Services use third-party large-language and image-generation models to
        produce educational content from prompts you provide. When you use these
        features:
      </p>
      <ul>
        <li>
          Your prompts and any related context are transmitted to the AI provider that
          processes that request. Providers we use are listed in § 7.
        </li>
        <li>
          We require, by contract, that AI providers do <em>not</em> use your inputs or
          generated outputs to train their general-purpose models.
        </li>
        <li>
          AI-generated content is provided for educational use. Outputs may contain
          inaccuracies and should be reviewed by a qualified educator before being used
          with students.
        </li>
        <li>
          Subject to the rest of our agreements, you retain ownership of the content
          you generate; see the Terms &amp; Conditions for details.
        </li>
      </ul>

      <h2>6. Cookies &amp; Local Storage</h2>
      <p>
        We use a small number of cookies and similar technologies that are strictly
        necessary to operate the Services, including a session cookie that keeps you
        signed in across pages. We use Google Analytics 4 to understand aggregated
        usage patterns; you can opt out via your browser's Do-Not-Track signal or
        through the Google Analytics opt-out add-on.
      </p>

      <h2>7. Subprocessors</h2>
      <p>
        We rely on the following service providers to operate the Services. Each is
        bound by a data-processing agreement with Learneris and processes data only on
        our instructions.
      </p>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Provider</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cloud hosting &amp; database</td>
            <td>Microsoft Azure</td>
            <td>Asia Pacific</td>
          </tr>
          <tr>
            <td>AI text generation</td>
            <td>OpenAI, Anthropic, Google</td>
            <td>Varies</td>
          </tr>
          <tr>
            <td>AI image generation</td>
            <td>Google</td>
            <td>Varies</td>
          </tr>
          <tr>
            <td>Transactional email</td>
            <td>Resend</td>
            <td>United States</td>
          </tr>
          <tr>
            <td>Error monitoring</td>
            <td>Sentry</td>
            <td>United States</td>
          </tr>
          <tr>
            <td>Product analytics</td>
            <td>Google Analytics 4</td>
            <td>United States</td>
          </tr>
          <tr>
            <td>Authentication (optional)</td>
            <td>Google OAuth</td>
            <td>United States</td>
          </tr>
        </tbody>
      </table>
      <p>
        We will give reasonable advance notice on this page of any material change to
        our list of subprocessors.
      </p>

      <h2>8. Google API Services — Limited Use Disclosure</h2>
      <p>
        Some Services integrate with Google Workspace (including Google Classroom,
        Drive, Docs, and Slides) to import or export content on your behalf. When we
        access your Google data through these integrations, we follow the{' '}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements:
      </p>
      <ul>
        <li>
          We use Google user data <strong>only</strong> to provide and improve the
          Services that you have explicitly authorised.
        </li>
        <li>
          We do <strong>not</strong> sell Google user data, transfer it for advertising,
          or use it for credit-worthiness or lending purposes.
        </li>
        <li>
          We do <strong>not</strong> allow humans to read your Google user data, except
          (a) with your explicit consent, (b) where required for security or to comply
          with applicable law, or (c) where the data has been aggregated and is used
          for internal operations in accordance with the User Data Policy.
        </li>
      </ul>

      <h2>9. Sharing &amp; Disclosure</h2>
      <p>We do not sell your personal information. We share data only in the circumstances below:</p>
      <ul>
        <li>
          <strong>With your consent</strong> or on your direct instruction (for example,
          when you click "Share to Classroom" or push content to your LMS).
        </li>
        <li>
          <strong>With our subprocessors</strong> as listed in § 7, under written
          data-protection terms.
        </li>
        <li>
          <strong>With your school or institution</strong> where you use the Services
          through an institutional account and the institution has lawful authority to
          access the data.
        </li>
        <li>
          <strong>To comply with law</strong> or respond to valid legal process,
          government requests, or to protect the rights, property, or safety of
          Learneris, our users, or the public.
        </li>
        <li>
          <strong>In a corporate transaction</strong> such as a merger, acquisition, or
          asset sale, in which case any acquirer must honour the commitments in this
          Privacy Policy.
        </li>
      </ul>

      <h2>10. Data Retention</h2>
      <p>
        We retain personal data for as long as your account is active and as needed to
        provide the Services, comply with legal obligations, resolve disputes, and
        enforce our agreements. Specifically:
      </p>
      <ul>
        <li>
          <strong>Content you create</strong> (lessons, study guides, etc.) is retained
          for as long as your account is active so you can access it.
        </li>
        <li>
          <strong>Account data</strong> is retained for the life of your account.
        </li>
        <li>
          <strong>LMS launch records</strong> are retained for up to 24 months for
          audit and grade-passback reconciliation.
        </li>
        <li>
          <strong>Server and security logs</strong> are retained for up to 90 days.
        </li>
        <li>
          When you delete your account, we will delete or anonymise associated personal
          data within 90 days, except where a longer period is required by law.
        </li>
      </ul>

      <h2>11. International Data Transfers</h2>
      <p>
        Learneris is incorporated in Singapore. Our infrastructure is hosted on
        Microsoft Azure in the Asia Pacific region. Some of our subprocessors process
        data in the United States or other regions, as listed in § 7. Where we transfer
        personal data internationally, we rely on appropriate safeguards, including
        contractual protections that meet applicable law.
      </p>

      <h2>12. Data Security</h2>
      <p>
        We implement and maintain administrative, technical, and physical safeguards
        designed to protect personal data, including:
      </p>
      <ul>
        <li>Encryption in transit (TLS) and at rest.</li>
        <li>Role-based access controls and the principle of least privilege.</li>
        <li>Continuous monitoring, logging, and intrusion detection.</li>
        <li>Periodic security review of our infrastructure and dependencies.</li>
        <li>Staff training on data security and privacy responsibilities.</li>
      </ul>
      <p>
        No system is perfectly secure. If we become aware of a data breach affecting
        your personal data, we will notify affected users within 72 hours and notify
        relevant regulators where required by law.
      </p>

      <h2>13. Your Rights</h2>
      <p>You have the following rights with respect to your personal data:</p>
      <ul>
        <li>
          <strong>Access:</strong> request a copy of the personal data we hold about you.
        </li>
        <li>
          <strong>Rectification:</strong> request correction of inaccurate or incomplete
          data.
        </li>
        <li>
          <strong>Erasure:</strong> request deletion of your personal data, subject to
          legal exceptions.
        </li>
        <li>
          <strong>Restriction:</strong> ask us to limit how we process your data.
        </li>
        <li>
          <strong>Portability:</strong> request your data in a machine-readable format.
        </li>
        <li>
          <strong>Objection:</strong> object to processing based on our legitimate
          interests.
        </li>
        <li>
          <strong>Withdraw consent</strong> where processing is based on consent.
        </li>
        <li>
          <strong>Lodge a complaint</strong> with your local data-protection authority.
        </li>
      </ul>
      <p>
        To exercise any of these rights, email{' '}
        <a href="mailto:support@learneris.com">support@learneris.com</a>. If you are a
        student at an institution that uses the Services, please direct rights requests
        to your school first; we will assist them in fulfilling your request.
      </p>

      <h2>14. California Residents (CCPA / CPRA)</h2>
      <p>
        If you are a California resident, you have the rights described in § 13 plus
        the right to opt out of the "sale" or "sharing" of personal information.
        Learneris does not sell or share personal information as those terms are
        defined under the California Consumer Privacy Act. To exercise California
        rights, email <a href="mailto:support@learneris.com">support@learneris.com</a>.
      </p>

      <h2>15. Children's Privacy</h2>
      <p>
        Some Services are designed to be used by children under 13 in school settings.
        In those cases we rely on the school or institution to act as the parents'
        representative in providing verifiable parental consent under COPPA. We do not
        knowingly collect personal information directly from children under 13 outside
        of an institutional context. If you believe we have inadvertently collected
        such information, please contact us and we will delete it promptly.
      </p>

      <h2>16. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The most recent version is
        always available on this page. If we make material changes, we will notify you
        by email or through a prominent notice in the Services before the change takes
        effect.
      </p>

      <h2>17. Contact Us</h2>
      <p>For privacy questions or rights requests, contact us at:</p>
      <ul>
        <li>
          <strong>Learneris Pte. Ltd.</strong>
        </li>
        <li>68 Circular Road #02-01, Singapore 049422</li>
        <li>
          Email: <a href="mailto:support@learneris.com">support@learneris.com</a>
        </li>
      </ul>
      <p>By using the Services, you accept the terms of this Privacy Policy.</p>
    </>
  )
}

function PrivacyContentVi() {
  return (
    <>
      <p>
        Learneris Pte. Ltd. ("Learneris") cam kết bảo vệ quyền riêng tư và thông tin cá nhân của
        người dùng. Chính sách bảo mật này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và
        bảo vệ dữ liệu cá nhân của bạn khi sử dụng nền tảng của chúng tôi.
      </p>

      <hr />

      <h2>1. Giới thiệu</h2>
      <p>
        Chính sách bảo mật này áp dụng cho tất cả người dùng của nền tảng Learneris, bao gồm các
        tổ chức giáo dục, giáo viên, giảng viên, nhà sáng tạo nội dung, phụ huynh và học sinh.
        Chúng tôi tuân thủ các quy định bảo vệ dữ liệu hiện hành, bao gồm COPPA (Đạo luật Bảo vệ
        Quyền Riêng tư Trẻ em Trên Mạng) và FERPA (Đạo luật Quyền Riêng tư và Quyền Giáo dục
        Gia đình) khi áp dụng.
      </p>

      <h2>2. Phạm vi thu thập dữ liệu cá nhân</h2>
      <p>Chúng tôi thu thập các loại thông tin sau:</p>
      <ul>
        <li>
          <strong>Thông tin tài khoản:</strong> Tên, địa chỉ email, vai trò (giáo viên, học sinh,
          phụ huynh, v.v.)
        </li>
        <li>
          <strong>Thông tin sử dụng:</strong> Dữ liệu về cách bạn tương tác với nền tảng, bao gồm
          nội dung tạo ra, thời gian sử dụng và tần suất truy cập.
        </li>
        <li>
          <strong>Thông tin kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành và
          thông tin thiết bị.
        </li>
        <li>
          <strong>Thông tin học sinh:</strong> Khi được cung cấp bởi tổ chức giáo dục hoặc phụ
          huynh, có thể bao gồm tên, lớp học và dữ liệu học tập.
        </li>
      </ul>

      <h2>3. Mục đích sử dụng dữ liệu</h2>
      <p>Chúng tôi sử dụng thông tin thu thập được để:</p>
      <ul>
        <li>Cung cấp và cải thiện dịch vụ nền tảng.</li>
        <li>Cá nhân hóa trải nghiệm người dùng.</li>
        <li>Hỗ trợ kỹ thuật và dịch vụ khách hàng.</li>
        <li>Tuân thủ các yêu cầu pháp lý.</li>
        <li>Phân tích và nghiên cứu để nâng cao chất lượng giáo dục.</li>
      </ul>

      <h2>4. Lưu trữ và bảo mật</h2>

      <h3>4.1. Lưu trữ dữ liệu</h3>
      <p>
        Dữ liệu được lưu trữ trên các máy chủ bảo mật với các biện pháp bảo vệ phù hợp với tiêu
        chuẩn ngành.
      </p>

      <h3>4.2. Mã hóa và truyền tải</h3>
      <p>
        Tất cả dữ liệu được mã hóa trong quá trình truyền tải (SSL/TLS) và khi lưu trữ để đảm
        bảo an toàn thông tin.
      </p>

      <h3>4.3. Biện pháp bảo mật khác</h3>
      <ul>
        <li>Kiểm soát truy cập dựa trên vai trò.</li>
        <li>Giám sát và phát hiện xâm nhập.</li>
        <li>Đánh giá bảo mật định kỳ.</li>
        <li>Đào tạo nhân viên về bảo mật dữ liệu.</li>
      </ul>

      <h2>5. Thời gian lưu trữ dữ liệu</h2>
      <p>
        Chúng tôi lưu trữ dữ liệu cá nhân trong thời gian cần thiết để cung cấp dịch vụ hoặc theo
        yêu cầu của pháp luật. Khi tài khoản bị xóa hoặc không còn hoạt động, chúng tôi sẽ xóa
        hoặc ẩn danh dữ liệu cá nhân trong vòng 90 ngày, trừ khi pháp luật yêu cầu lưu trữ lâu
        hơn.
      </p>

      <h2>6. Chia sẻ và tiết lộ dữ liệu</h2>
      <p>
        Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ dữ liệu trong các
        trường hợp sau:
      </p>
      <ul>
        <li>Với sự đồng ý của bạn.</li>
        <li>
          Với các nhà cung cấp dịch vụ bên thứ ba hỗ trợ vận hành nền tảng (theo các thỏa thuận
          bảo mật nghiêm ngặt).
        </li>
        <li>Khi được yêu cầu bởi pháp luật hoặc quy trình pháp lý.</li>
        <li>
          Để bảo vệ quyền lợi, tài sản hoặc an toàn của Learneris, người dùng hoặc công chúng.
        </li>
      </ul>

      <h2>7. Vi phạm dữ liệu</h2>
      <p>
        Trong trường hợp xảy ra vi phạm dữ liệu ảnh hưởng đến thông tin cá nhân, Learneris sẽ:
      </p>
      <ul>
        <li>Thông báo cho người dùng bị ảnh hưởng trong vòng 72 giờ.</li>
        <li>Thông báo cho các cơ quan quản lý theo yêu cầu của pháp luật.</li>
        <li>Thực hiện các biện pháp khắc phục để ngăn chặn vi phạm tiếp theo.</li>
      </ul>

      <h2>8. Quyền của người dùng</h2>
      <p>Bạn có các quyền sau đối với dữ liệu cá nhân của mình:</p>
      <ul>
        <li>
          <strong>Quyền truy cập:</strong> Yêu cầu xem thông tin cá nhân chúng tôi lưu trữ về
          bạn.
        </li>
        <li>
          <strong>Quyền chỉnh sửa:</strong> Yêu cầu sửa đổi thông tin không chính xác.
        </li>
        <li>
          <strong>Quyền xóa:</strong> Yêu cầu xóa thông tin cá nhân của bạn.
        </li>
        <li>
          <strong>Quyền hạn chế xử lý:</strong> Yêu cầu giới hạn cách chúng tôi sử dụng dữ liệu
          của bạn.
        </li>
        <li>
          <strong>Quyền di chuyển dữ liệu:</strong> Yêu cầu nhận bản sao dữ liệu của bạn ở
          định dạng có thể đọc được.
        </li>
      </ul>
      <p>
        Để thực hiện bất kỳ quyền nào ở trên, vui lòng liên hệ chúng tôi tại{' '}
        <a href="mailto:support@learneris.com">support@learneris.com</a>.
      </p>

      <h2>9. Thông tin liên hệ</h2>
      <p>
        Nếu bạn có bất kỳ câu hỏi hoặc lo ngại nào về chính sách bảo mật này, vui lòng liên hệ:
      </p>
      <ul>
        <li>
          <strong>Learneris Pte. Ltd.</strong>
        </li>
        <li>68 CIRCULAR ROAD #02-01, SINGAPORE 049422</li>
        <li>
          Email: <a href="mailto:support@learneris.com">support@learneris.com</a>
        </li>
      </ul>

      <h2>10. Chấp thuận và cập nhật</h2>
      <p>
        Bằng việc sử dụng nền tảng của Learneris, bạn đồng ý với các điều khoản trong chính sách
        bảo mật này. Chúng tôi có thể cập nhật chính sách này theo thời gian và sẽ thông báo cho
        bạn về bất kỳ thay đổi quan trọng nào. Phiên bản mới nhất sẽ luôn có sẵn trên nền tảng
        của chúng tôi.
      </p>
    </>
  )
}

export function PrivacyPage() {
  const { locale } = useTranslation()
  const isVi = locale === 'vi'

  return (
    <LegalPage
      title={isVi ? 'Chính sách Bảo mật' : 'Privacy Policy'}
      effectiveDate={
        isVi
          ? 'Có hiệu lực từ ngày 26 tháng 7 năm 2024 · Cập nhật lần cuối ngày 17/01/2025'
          : 'Effective July 26, 2024 · Last updated April 26, 2026'
      }
    >
      {isVi ? <PrivacyContentVi /> : <PrivacyContentEn />}
    </LegalPage>
  )
}
