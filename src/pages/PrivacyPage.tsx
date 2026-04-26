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
          Your prompts and any related context are transmitted to a third-party AI
          provider for processing. We may use more than one provider and may change
          providers from time to time.
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
            <td>Third-party AI providers</td>
            <td>Varies</td>
          </tr>
          <tr>
            <td>AI image generation</td>
            <td>Third-party AI providers</td>
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
        Learneris Pte. Ltd. ("Learneris", "chúng tôi") cam kết bảo vệ quyền riêng
        tư của bạn. Chính sách Bảo mật này mô tả cách chúng tôi thu thập, sử dụng,
        lưu trữ, chia sẻ và bảo vệ dữ liệu cá nhân của bạn khi bạn sử dụng bất kỳ
        sản phẩm nào trong họ Dịch vụ của Learneris.
      </p>

      <hr />

      <h2>1. Phạm vi và Áp dụng</h2>
      <p>
        Chính sách Bảo mật này áp dụng cho mọi trang web, ứng dụng hoặc dịch vụ do
        Learneris vận hành trên tên miền learneris.com hoặc bất kỳ tên miền phụ
        nào của learneris.com (ví dụ:{' '}
        <a href="https://www.learneris.com">learneris.com</a>,{' '}
        <a href="https://studio.learneris.com">studio.learneris.com</a> và{' '}
        <a href="https://ai.learneris.com">ai.learneris.com</a>), cùng với mọi
        công cụ hoặc dịch vụ khác do Learneris phát hành sau này (gọi chung là
        "Dịch vụ"). Chính sách này áp dụng cho tất cả người dùng — tổ chức giáo
        dục, giáo viên, giảng viên, nhà sáng tạo nội dung, phụ huynh và học sinh.
      </p>
      <p>
        Trường hợp một trường học hoặc tổ chức sử dụng Dịch vụ để quản lý học sinh
        của mình, tổ chức đó là "bên kiểm soát dữ liệu" và Learneris hoạt động
        với tư cách "bên xử lý dữ liệu" theo chỉ dẫn của tổ chức đó.
      </p>

      <h2>2. Thông tin chúng tôi thu thập</h2>
      <p>Chúng tôi thu thập các loại thông tin sau:</p>
      <ul>
        <li>
          <strong>Thông tin tài khoản:</strong> tên, địa chỉ email, vai trò
          (giáo viên, học sinh, phụ huynh, quản trị viên), tổ chức trực thuộc và
          mật khẩu (được lưu dưới dạng băm một chiều).
        </li>
        <li>
          <strong>Nội dung bạn tạo hoặc tải lên:</strong> giáo án, tài liệu học
          tập, bài kiểm tra, slide, hình ảnh, lệnh nhập (prompt) và bất kỳ nội
          dung nào khác bạn nhập vào hoặc tạo ra qua Dịch vụ.
        </li>
        <li>
          <strong>Dữ liệu sử dụng:</strong> tính năng đã sử dụng, nội dung đã
          tạo, thời lượng và tần suất truy cập.
        </li>
        <li>
          <strong>Thông tin kỹ thuật:</strong> địa chỉ IP, loại trình duyệt, hệ
          điều hành, thông tin thiết bị và một cookie phiên đăng nhập để duy trì
          trạng thái đăng nhập.
        </li>
        <li>
          <strong>Dữ liệu học sinh:</strong> khi một trường học hoặc phụ huynh
          đăng ký cho học sinh, chúng tôi có thể tiếp nhận tên, khối lớp, lớp học
          được phân công và dữ liệu tiến độ học tập. Chúng tôi coi dữ liệu học
          sinh là dữ liệu nhạy cảm và bảo vệ theo COPPA, FERPA và các luật bảo vệ
          dữ liệu trẻ em quốc gia hiện hành khi áp dụng.
        </li>
        <li>
          <strong>Dữ liệu khởi chạy LMS:</strong> khi bạn khởi chạy một hoạt động
          Learneris từ một Hệ thống Quản lý Học tập của bên thứ ba (như Moodle,
          Canvas hoặc Google Classroom) bằng tiêu chuẩn LTI 1.3, chúng tôi tiếp
          nhận tên, địa chỉ email, vai trò và bối cảnh khoá học/bài tập từ LMS
          của bạn. Dữ liệu này chỉ được dùng để định danh bạn cho phiên khởi chạy
          và để gửi điểm trở lại khi được hỗ trợ.
        </li>
        <li>
          <strong>Thông tin thanh toán:</strong> nếu bạn mua các Dịch vụ trả phí,
          đơn vị xử lý thanh toán của chúng tôi sẽ thu thập thông tin phương
          thức thanh toán. Bản thân Learneris không lưu trữ số thẻ đầy đủ.
        </li>
      </ul>

      <h2>3. Cách chúng tôi sử dụng thông tin</h2>
      <p>Chúng tôi sử dụng thông tin thu thập được để:</p>
      <ul>
        <li>Cung cấp, vận hành và duy trì Dịch vụ.</li>
        <li>Tạo nội dung AI theo yêu cầu của bạn (xem § 5).</li>
        <li>Cá nhân hoá trải nghiệm và đề xuất tính năng phù hợp.</li>
        <li>Hỗ trợ khách hàng và phản hồi các yêu cầu của bạn.</li>
        <li>
          Phát hiện, phòng ngừa và xử lý gian lận, lạm dụng, sự cố an ninh và vi
          phạm chính sách.
        </li>
        <li>
          Tuân thủ nghĩa vụ pháp lý, yêu cầu của toà án và quy định của cơ quan
          quản lý.
        </li>
        <li>
          Cải thiện Dịch vụ thông qua phân tích tổng hợp, đã được phi định danh.
          Chúng tôi không sử dụng dữ liệu nhập của bạn hoặc nội dung do AI tạo
          để huấn luyện các mô hình AI nền tảng mà chúng tôi sử dụng, và chúng
          tôi ràng buộc các nhà cung cấp AI bằng cùng nguyên tắc này.
        </li>
      </ul>

      <h2>4. Cơ sở pháp lý xử lý dữ liệu (Người dùng tại EU/UK)</h2>
      <p>
        Khi GDPR hoặc UK GDPR được áp dụng, chúng tôi xử lý dữ liệu cá nhân của
        bạn dựa trên một hoặc nhiều cơ sở pháp lý sau: (a) thực hiện hợp đồng với
        bạn; (b) sự đồng ý của bạn; (c) lợi ích hợp pháp của chúng tôi trong
        việc vận hành và cải thiện Dịch vụ; và (d) tuân thủ nghĩa vụ pháp lý.
      </p>

      <h2>5. Nội dung do AI tạo và Nhà cung cấp dịch vụ AI</h2>
      <p>
        Một số Dịch vụ sử dụng các mô hình ngôn ngữ lớn và mô hình tạo hình ảnh
        của bên thứ ba để tạo nội dung giáo dục từ các lệnh nhập của bạn. Khi bạn
        sử dụng các tính năng này:
      </p>
      <ul>
        <li>
          Lệnh nhập và bối cảnh liên quan của bạn được truyền đến một nhà cung
          cấp AI bên thứ ba để xử lý. Chúng tôi có thể sử dụng nhiều nhà cung
          cấp AI và có thể thay đổi nhà cung cấp theo thời gian.
        </li>
        <li>
          Chúng tôi yêu cầu, bằng hợp đồng, các nhà cung cấp AI <em>không</em> sử
          dụng dữ liệu nhập hoặc kết quả AI của bạn để huấn luyện mô hình
          tổng quát của họ.
        </li>
        <li>
          Nội dung do AI tạo được cung cấp cho mục đích giáo dục. Kết quả có thể
          chứa thông tin không chính xác và cần được giáo viên có chuyên môn rà
          soát trước khi sử dụng với học sinh.
        </li>
        <li>
          Tuỳ thuộc vào các thoả thuận khác giữa hai bên, bạn giữ quyền sở hữu
          đối với nội dung mình tạo ra; chi tiết được nêu trong Điều khoản &amp;
          Điều kiện.
        </li>
      </ul>

      <h2>6. Cookie và lưu trữ cục bộ</h2>
      <p>
        Chúng tôi sử dụng một số ít cookie và công nghệ tương tự ở mức tối cần
        thiết để vận hành Dịch vụ, bao gồm cookie phiên đăng nhập để duy trì
        trạng thái đăng nhập của bạn giữa các trang. Chúng tôi sử dụng Google
        Analytics 4 để hiểu các mẫu hành vi sử dụng tổng hợp; bạn có thể từ
        chối tham gia thông qua tín hiệu Do-Not-Track của trình duyệt hoặc tiện
        ích từ chối Google Analytics.
      </p>

      <h2>7. Đơn vị xử lý phụ</h2>
      <p>
        Chúng tôi sử dụng các nhà cung cấp dịch vụ sau để vận hành Dịch vụ. Mỗi
        đơn vị đều bị ràng buộc bởi thoả thuận xử lý dữ liệu với Learneris và chỉ
        xử lý dữ liệu theo chỉ dẫn của chúng tôi.
      </p>
      <table>
        <thead>
          <tr>
            <th>Mục đích</th>
            <th>Nhà cung cấp</th>
            <th>Khu vực</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hạ tầng đám mây và cơ sở dữ liệu</td>
            <td>Microsoft Azure</td>
            <td>Châu Á – Thái Bình Dương</td>
          </tr>
          <tr>
            <td>Tạo văn bản bằng AI</td>
            <td>Nhà cung cấp AI bên thứ ba</td>
            <td>Đa khu vực</td>
          </tr>
          <tr>
            <td>Tạo hình ảnh bằng AI</td>
            <td>Nhà cung cấp AI bên thứ ba</td>
            <td>Đa khu vực</td>
          </tr>
          <tr>
            <td>Email giao dịch</td>
            <td>Resend</td>
            <td>Hoa Kỳ</td>
          </tr>
          <tr>
            <td>Giám sát lỗi</td>
            <td>Sentry</td>
            <td>Hoa Kỳ</td>
          </tr>
          <tr>
            <td>Phân tích sản phẩm</td>
            <td>Google Analytics 4</td>
            <td>Hoa Kỳ</td>
          </tr>
          <tr>
            <td>Xác thực (tuỳ chọn)</td>
            <td>Google OAuth</td>
            <td>Hoa Kỳ</td>
          </tr>
        </tbody>
      </table>
      <p>
        Chúng tôi sẽ thông báo trước trên trang này khi có bất kỳ thay đổi quan
        trọng nào đối với danh sách đơn vị xử lý phụ.
      </p>

      <h2>8. Tiết lộ Sử dụng Có Giới hạn cho Dịch vụ Google API</h2>
      <p>
        Một số Dịch vụ tích hợp với Google Workspace (bao gồm Google Classroom,
        Drive, Docs và Slides) để nhập hoặc xuất nội dung thay mặt cho bạn. Khi
        truy cập dữ liệu Google của bạn qua các tích hợp này, chúng tôi tuân thủ{' '}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chính sách Dữ liệu Người dùng của Google API Services
        </a>
        , bao gồm các yêu cầu Sử dụng Có Giới hạn:
      </p>
      <ul>
        <li>
          Chúng tôi <strong>chỉ</strong> sử dụng dữ liệu người dùng Google để
          cung cấp và cải thiện những Dịch vụ mà bạn đã trực tiếp cho phép.
        </li>
        <li>
          Chúng tôi <strong>không</strong> bán dữ liệu người dùng Google, không
          chuyển giao cho mục đích quảng cáo, và không sử dụng cho mục đích đánh
          giá tín dụng hoặc cho vay.
        </li>
        <li>
          Chúng tôi <strong>không</strong> cho phép con người đọc dữ liệu người
          dùng Google của bạn, ngoại trừ (a) khi bạn đã đồng ý rõ ràng, (b) khi
          cần cho mục đích an ninh hoặc tuân thủ pháp luật, hoặc (c) khi dữ liệu
          đã được tổng hợp và sử dụng cho mục đích vận hành nội bộ phù hợp với
          Chính sách Dữ liệu Người dùng.
        </li>
      </ul>

      <h2>9. Chia sẻ và Tiết lộ</h2>
      <p>
        Chúng tôi không bán thông tin cá nhân của bạn. Chúng tôi chỉ chia sẻ dữ
        liệu trong các trường hợp dưới đây:
      </p>
      <ul>
        <li>
          <strong>Khi có sự đồng ý của bạn</strong> hoặc theo chỉ dẫn trực tiếp
          của bạn (ví dụ: khi bạn nhấn "Chia sẻ tới Classroom" hoặc đẩy nội dung
          sang LMS).
        </li>
        <li>
          <strong>Với các đơn vị xử lý phụ</strong> như liệt kê tại § 7, theo
          các điều khoản bảo vệ dữ liệu bằng văn bản.
        </li>
        <li>
          <strong>Với trường học hoặc tổ chức của bạn</strong> khi bạn sử dụng
          Dịch vụ thông qua tài khoản tổ chức và tổ chức đó có thẩm quyền pháp
          lý truy cập dữ liệu.
        </li>
        <li>
          <strong>Để tuân thủ pháp luật</strong> hoặc đáp ứng quy trình pháp lý
          hợp lệ, yêu cầu của cơ quan nhà nước, hoặc để bảo vệ quyền, tài sản,
          an toàn của Learneris, người dùng hoặc công chúng.
        </li>
        <li>
          <strong>Trong giao dịch doanh nghiệp</strong> như sáp nhập, mua lại
          hoặc bán tài sản, trong đó bên nhận chuyển giao phải tôn trọng các cam
          kết trong Chính sách Bảo mật này.
        </li>
      </ul>

      <h2>10. Lưu trữ dữ liệu</h2>
      <p>
        Chúng tôi lưu trữ dữ liệu cá nhân trong thời gian tài khoản của bạn còn
        hoạt động và khi cần thiết để cung cấp Dịch vụ, tuân thủ nghĩa vụ pháp
        lý, giải quyết tranh chấp và thực thi các thoả thuận. Cụ thể:
      </p>
      <ul>
        <li>
          <strong>Nội dung bạn tạo</strong> (giáo án, tài liệu học tập, v.v.)
          được lưu trữ trong suốt thời gian tài khoản hoạt động để bạn có thể
          truy cập.
        </li>
        <li>
          <strong>Dữ liệu tài khoản</strong> được lưu trữ trong suốt vòng đời
          tài khoản.
        </li>
        <li>
          <strong>Bản ghi khởi chạy LMS</strong> được lưu giữ đến 24 tháng phục
          vụ kiểm toán và đối soát điểm số.
        </li>
        <li>
          <strong>Nhật ký máy chủ và an ninh</strong> được lưu giữ đến 90 ngày.
        </li>
        <li>
          Khi bạn xoá tài khoản, chúng tôi sẽ xoá hoặc phi định danh dữ liệu cá
          nhân liên quan trong vòng 90 ngày, trừ trường hợp pháp luật yêu cầu
          thời gian dài hơn.
        </li>
      </ul>

      <h2>11. Chuyển dữ liệu quốc tế</h2>
      <p>
        Learneris được thành lập tại Singapore. Hạ tầng của chúng tôi được vận
        hành trên Microsoft Azure khu vực Châu Á – Thái Bình Dương. Một số đơn
        vị xử lý phụ xử lý dữ liệu tại Hoa Kỳ hoặc các khu vực khác, như liệt kê
        tại § 7. Khi chuyển dữ liệu cá nhân ra nước ngoài, chúng tôi áp dụng các
        biện pháp bảo vệ phù hợp, bao gồm các điều khoản hợp đồng đáp ứng pháp
        luật hiện hành.
      </p>

      <h2>12. An ninh dữ liệu</h2>
      <p>
        Chúng tôi triển khai và duy trì các biện pháp bảo vệ hành chính, kỹ
        thuật và vật lý hợp lý nhằm bảo vệ dữ liệu cá nhân, bao gồm:
      </p>
      <ul>
        <li>Mã hoá khi truyền (TLS) và khi lưu trữ.</li>
        <li>
          Kiểm soát truy cập theo vai trò và nguyên tắc quyền tối thiểu cần
          thiết.
        </li>
        <li>Giám sát, ghi nhật ký và phát hiện xâm nhập liên tục.</li>
        <li>Rà soát an ninh định kỳ với hạ tầng và các phụ thuộc.</li>
        <li>
          Đào tạo nhân viên về trách nhiệm bảo mật và quyền riêng tư dữ liệu.
        </li>
      </ul>
      <p>
        Không có hệ thống nào tuyệt đối an toàn. Nếu phát hiện vi phạm dữ liệu
        ảnh hưởng đến dữ liệu cá nhân của bạn, chúng tôi sẽ thông báo cho người
        dùng bị ảnh hưởng trong vòng 72 giờ và thông báo cho cơ quan quản lý
        liên quan khi pháp luật yêu cầu.
      </p>

      <h2>13. Quyền của bạn</h2>
      <p>
        Bạn có các quyền sau đối với dữ liệu cá nhân của mình:
      </p>
      <ul>
        <li>
          <strong>Quyền truy cập:</strong> yêu cầu nhận bản sao dữ liệu cá nhân
          chúng tôi đang lưu trữ về bạn.
        </li>
        <li>
          <strong>Quyền chỉnh sửa:</strong> yêu cầu sửa đổi dữ liệu không chính
          xác hoặc chưa đầy đủ.
        </li>
        <li>
          <strong>Quyền xoá:</strong> yêu cầu xoá dữ liệu cá nhân của bạn, theo
          các ngoại lệ pháp luật.
        </li>
        <li>
          <strong>Quyền hạn chế xử lý:</strong> yêu cầu hạn chế cách chúng tôi
          xử lý dữ liệu của bạn.
        </li>
        <li>
          <strong>Quyền chuyển giao dữ liệu:</strong> yêu cầu nhận dữ liệu của
          bạn ở định dạng có thể đọc bằng máy.
        </li>
        <li>
          <strong>Quyền phản đối:</strong> phản đối việc xử lý dựa trên lợi ích
          hợp pháp của chúng tôi.
        </li>
        <li>
          <strong>Rút lại sự đồng ý</strong> khi việc xử lý dựa trên sự đồng ý.
        </li>
        <li>
          <strong>Khiếu nại</strong> với cơ quan bảo vệ dữ liệu tại địa phương
          của bạn.
        </li>
      </ul>
      <p>
        Để thực hiện bất kỳ quyền nào ở trên, vui lòng gửi email tới{' '}
        <a href="mailto:support@learneris.com">support@learneris.com</a>. Nếu
        bạn là học sinh tại một tổ chức đang sử dụng Dịch vụ, vui lòng gửi yêu
        cầu tới trường của bạn trước; chúng tôi sẽ phối hợp với trường để đáp
        ứng yêu cầu của bạn.
      </p>

      <h2>14. Cư dân California (CCPA / CPRA)</h2>
      <p>
        Nếu bạn là cư dân California, bạn có các quyền nêu tại § 13 cùng quyền
        từ chối "bán" hoặc "chia sẻ" thông tin cá nhân. Learneris không bán
        hoặc chia sẻ thông tin cá nhân theo cách định nghĩa của Đạo luật Quyền
        Riêng tư của Người tiêu dùng California. Để thực hiện quyền tại
        California, vui lòng gửi email tới{' '}
        <a href="mailto:support@learneris.com">support@learneris.com</a>.
      </p>

      <h2>15. Quyền riêng tư của trẻ em</h2>
      <p>
        Một số Dịch vụ được thiết kế để trẻ em dưới 13 tuổi sử dụng trong môi
        trường trường học. Trong các trường hợp đó, chúng tôi dựa vào trường học
        hoặc tổ chức để đóng vai trò đại diện cho phụ huynh trong việc cung cấp
        sự đồng ý có thể xác minh của phụ huynh theo COPPA. Chúng tôi không cố
        ý thu thập thông tin cá nhân trực tiếp từ trẻ em dưới 13 tuổi ngoài bối
        cảnh tổ chức. Nếu bạn cho rằng chúng tôi vô tình thu thập thông tin như
        vậy, vui lòng liên hệ và chúng tôi sẽ xoá kịp thời.
      </p>

      <h2>16. Thay đổi Chính sách</h2>
      <p>
        Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian. Phiên
        bản mới nhất luôn được hiển thị tại trang này. Khi có thay đổi quan
        trọng, chúng tôi sẽ thông báo qua email hoặc qua thông báo nổi bật trên
        Dịch vụ trước khi thay đổi có hiệu lực.
      </p>

      <h2>17. Liên hệ với chúng tôi</h2>
      <p>
        Đối với các câu hỏi về quyền riêng tư hoặc yêu cầu thực hiện quyền, vui
        lòng liên hệ:
      </p>
      <ul>
        <li>
          <strong>Learneris Pte. Ltd.</strong>
        </li>
        <li>68 Circular Road #02-01, Singapore 049422</li>
        <li>
          Email: <a href="mailto:support@learneris.com">support@learneris.com</a>
        </li>
      </ul>
      <p>
        Bằng việc sử dụng Dịch vụ, bạn chấp nhận các điều khoản của Chính sách
        Bảo mật này.
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
          ? 'Có hiệu lực từ ngày 26/07/2024 · Cập nhật lần cuối ngày 26/04/2026'
          : 'Effective July 26, 2024 · Last updated April 26, 2026'
      }
    >
      {isVi ? <PrivacyContentVi /> : <PrivacyContentEn />}
    </LegalPage>
  )
}
