import { LegalPage } from '../components/LegalPage'

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="Effective July 26, 2024 · Last updated January 17, 2025"
    >
      <p>
        Learneris Pte. Ltd. ("Learneris") is committed to protecting the privacy and Personal
        Information of its users. This Privacy Policy describes how we collect, use, store, and
        protect your personal data when you use our Platform.
      </p>

      <hr />

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy applies to all users of the Learneris Platform, including educational
        institutions, teachers, lecturers, content creators, parents, and students. We comply with
        applicable data protection regulations, including the Children's Online Privacy Protection
        Act (COPPA) and the Family Educational Rights and Privacy Act (FERPA) where those laws
        apply.
      </p>

      <h2>2. Data Collection</h2>
      <p>We collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> Name, email address, and role (teacher, student,
          parent, etc.).
        </li>
        <li>
          <strong>Usage data:</strong> Information about how you interact with the Platform,
          including content created, time spent, and frequency of access.
        </li>
        <li>
          <strong>Technical information:</strong> IP address, browser type, operating system, and
          device information.
        </li>
        <li>
          <strong>Student data:</strong> When provided by an educational institution or parent,
          this may include name, grade level, and learning data.
        </li>
      </ul>

      <h2>3. Purpose of Data Use</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and improve the Platform and its services.</li>
        <li>Personalize the user experience.</li>
        <li>Provide technical support and customer service.</li>
        <li>Comply with applicable legal requirements.</li>
        <li>Conduct analysis and research to improve educational quality.</li>
      </ul>

      <h2>4. Storage and Security</h2>

      <h3>4.1 Data Storage</h3>
      <p>
        Data is stored on secure servers with protections that meet industry-standard requirements.
      </p>

      <h3>4.2 Encryption</h3>
      <p>
        All data is encrypted in transit using SSL/TLS and encrypted at rest to ensure the
        security of your information.
      </p>

      <h3>4.3 Other Security Measures</h3>
      <ul>
        <li>Role-based access controls.</li>
        <li>Intrusion detection and ongoing monitoring.</li>
        <li>Periodic security assessments.</li>
        <li>Staff training on data security practices.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain Personal Information for as long as necessary to provide the service or as
        required by law. When an account is deleted or becomes inactive, we will delete or
        anonymize Personal Information within 90 days, unless a longer retention period is
        required by applicable law.
      </p>

      <h2>6. Data Sharing and Disclosure</h2>
      <p>
        We do not sell your Personal Information. We share data only in the following
        circumstances:
      </p>
      <ul>
        <li>With your consent.</li>
        <li>
          With third-party service providers that support the operation of the Platform, under
          strict data protection agreements.
        </li>
        <li>When required by law or legal process.</li>
        <li>
          To protect the rights, property, or safety of Learneris, its users, or the public.
        </li>
      </ul>

      <h2>7. Data Breach</h2>
      <p>
        In the event of a data breach affecting Personal Information, Learneris will:
      </p>
      <ul>
        <li>Notify affected users within 72 hours of becoming aware of the breach.</li>
        <li>Notify relevant regulatory authorities as required by applicable law.</li>
        <li>Implement remediation measures to prevent further unauthorized access.</li>
      </ul>

      <h2>8. User Rights</h2>
      <p>You have the following rights with respect to your Personal Information:</p>
      <ul>
        <li>
          <strong>Right of access:</strong> Request to view the Personal Information we hold about
          you.
        </li>
        <li>
          <strong>Right to rectification:</strong> Request correction of inaccurate information.
        </li>
        <li>
          <strong>Right to erasure:</strong> Request deletion of your Personal Information.
        </li>
        <li>
          <strong>Right to restriction of processing:</strong> Request that we limit how we use
          your data.
        </li>
        <li>
          <strong>Right to data portability:</strong> Request a copy of your data in a
          machine-readable format.
        </li>
      </ul>
      <p>
        To exercise any of the rights above, please contact us at{' '}
        <a href="mailto:support@learneris.com">support@learneris.com</a>.
      </p>

      <h2>9. Contact</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
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

      <h2>10. Acceptance and Updates</h2>
      <p>
        By using the Learneris Platform, you accept the terms of this Privacy Policy. We may
        update this policy from time to time and will notify you of any material changes. The most
        recent version will always be available on our Platform.
      </p>
    </LegalPage>
  )
}
