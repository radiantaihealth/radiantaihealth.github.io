import React from "react";
import { Box, Container, Flex, Text, Heading, Li } from "theme-ui";

const ToU = () => {
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.content}>
            <Heading as="h3">Terms of Use</Heading>
            <Text as="p">
              The following terms of use (the “Terms of Use”) govern your access
              to and use of: (a) our website located at www.radiantai.health
              (the “RadiantAI Health Website”); (b) any mobile device software
              provided by us to you (the “RadiantAI Health Application”); (c)
              RadiantAI Health’s proprietary application programming interface,
              and any related documentation (the “RadiantAI Health API”); (d)
              any text, pictures, media, data, information and other materials
              or content (collectively, the “Content”) contained on or provided
              through the foregoing (a) to (c); and (e) all other Content,
              products or services provided by us to you, as more particularly
              described on the RadiantAI Health Website and the RadiantAI
              HealthApplication. The RadiantAI Health Website, RadiantAI Health
              Application, RadiantAI Health API and Content are collectively
              referred to as the “RadiantAI Health Solution”. These Terms of Use
              form an agreement between RadiantAI Health Inc. (“RadiantAI
              Health”, “us”, “we”, “our”) and you. The term “you” or
              “identification” refers to the person or entity browsing,
              installing, downloading, accessing or otherwise using the
              RadiantAI Health Solution (“use” or “using” in these Terms of Use
              will mean any of the foregoing).
            </Text>

            <Text sx={{ mt: "20px", mb: "30px" }}>
              BY USING THE RADIANTAI HEALTH SOLUTION IN ANY WAY, INCLUDING
              PURCHASING ANY SERVICES WE SELL ON THE RADIANTAI HEALTH SOLUTION
              (THE “SERVICES”), YOU: (A) REPRESENT AND WARRANT THAT (I) YOU HAVE
              REACHED THE AGE OF MAJORITY IN YOUR JURISDICTION, (II) YOU HAVE
              THE CAPACITY TO ENTER INTO BINDING OBLIGATIONS, AND (III) ALL
              INFORMATION SUPPLIED BY YOU TO US THROUGH THE RADIANTAI HEALTH
              SOLUTION IS TRUE, ACCURATE, CURRENT, AND COMPLETE; AND (B) AGREE
              TO BE BOUND BY AND COMPLY WITH THESE TERMS OF USE, AS UPDATED FROM
              TIME TO TIME IN ACCORDANCE WITH SECTION 1. IF YOU ARE USING THE
              RADIANTAI HEALTH SOLUTION ON BEHALF OF ANOTHER PERSON OR A
              CORPORATE ENTITY, YOU REPRESENT AND WARRANT THAT YOU HAVE THE
              AUTHORITY TO BIND SUCH PERSON OR ENTITY TO THESE TERMS OF USE. YOU
              MAY NOT BE ACCESS THE RADIANTAI HEALTH SOLUTION FOR PURPOSES OF
              MONITORING AVAILABILITY, PERFORMANCE OR FUNCTIONALITY, OR FOR ANY
              OTHER BENCHMARKING OR COMPETITIVE PURPOSES. RADIANTAI HEALTH’S
              DIRECT COMPETITORS ARE PROHIBITED FROM ACCESSING THE RadiantAI
              Health SOLUTION, EXCEPT WITH RADIANTAI HEALTH’S PRIOR WRITTEN
              CONSENT.
            </Text>

            <Text as="p">
              This Agreement does not alter in any way the terms or conditions
              of any other agreement you may have with us in respect of any
              Services, products, applications or otherwise, including any
              Subscription Agreement you enter with us.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">
              1. Changes to these Terms of Use and the RadiantAI Health Solution
            </Text>
            <Text as="p">
              We reserve the right to update or modify our Terms of Service and
              Privacy Policy at any time, and any changes will be effective
              immediately upon posting on our website. Your continued use of our
              services following the posting of any changes constitutes your
              acceptance of those changes. We encourage you to review our Terms
              of Service and Privacy Policy periodically to stay informed about
              our practices.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">2. Customer Data and Privacy</Text>
            <Text as="p">
              To protect your patient’s privacy, avoid entering any personal
              health information while using our RadiantAI Health Solution. Any
              information you provide is used by RadiantAI Health Solutiont to
              answer your clinical questions and provide general medical
              information. We store this information in a secure database and
              use it to improve the accuracy and efficiency of our AI medical
              assistant. We will never share your personal information with any
              third parties without your consent.
            </Text>
            <Text as="p">
              We may use the anonymized data entered by users to improve the
              accuracy and efficiency of our AI medical assistant. This data
              will be stripped of any personally identifiable information and
              analyzed in aggregate to identify trends, patterns, and areas for
              improvement. By using our services, you agree to allow us to use
              your anonymized data for these purposes. We may also share this
              anonymized data with our partners and affiliates to support
              research and development initiatives in the field of AI and
              healthcare.
            </Text>
            <Text as="p">
              RADIANTAI HEALTH DOES NOT REPRESENT, WARRANT, OR COVENANT THAT IT
              HAS REVIEWED ANY THIRD PARTY TERMS AND CONDITIONS AND IS NOT
              RESPONSIBLE FOR ANY DATA SHARED WITH THIRD PARTIES. RADIANTAI
              HEALTH DOES NOT ENDORSE ANY THIRD PARTY SERVICE AND YOU
              ACKNOWLEDGE THAT IF YOU CHOOSE TO SUBMIT ANY DATA TO THE RADIANTAI
              HEALTH SOLUTION, YOU DO SO ENTIRELY AT YOUR OWN RISK. YOU FURTHER
              ACKNOWLEDGE THAT ANY THIRD PARTY TERMS AND CONDITIONS MAY NOT HAVE
              THE SAME OR SIMILAR COMMITMENTS OR PROTECTIONS AS THOSE CONTAINED
              IN THESE TERMS OF USE AND DATA SHARED BY RADIANTAI HEALTH WITH
              THIRD PARTIES WILL BE ACCESSED, USED, AND OTHERWISE HANDLED BY
              SUCH THIRD PARTIES IN ACCORDANCE WITH THEIR TERMS AND CONDITIONS,
              WHICH MAY PERMIT SUCH THIRD PARTY TO USE DATA FOR ITS OWN
              PURPOSES.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">3. No Unlawful or Prohibited Use</Text>
            <Text as="p">
              You will not use the RadiantAI Health Solution in violation of
              these Terms of Use, any applicable Subscription Agreement, the
              Responsible Use Guidelines or any other responsible use guidelines
              we provide to you or are posted on the RadiantAI Health Website,
              or of any applicable law, or in the case of third party materials,
              websites or content accessed through or provided with the
              RadiantAI Health Solution or the Services, the applicable
              third-party license agreement. You will not, without our prior
              written permission, use the RadiantAI Health Solution for any
              purpose other than to access and use the software and Services we
              make available through the RadiantAI Health Solution. You
              acknowledge and agree that the RadiantAI Health Solution has been
              designed for business use and you represent and warrant to and
              covenant with RadiantAI Health that you will not use the RadiantAI
              Health Solution for personal, family or household purposes.
              Without limiting the generality of the foregoing, you further
              represent and warrant to and covenant with RadiantAI Health that
              you will not (and will not attempt to) directly or indirectly:
            </Text>
            <ol type="i">
              <li as="p">
                attempt to gain unauthorized access to the RadiantAI Health
                Solution, or bypass any measures we may use to prevent or
                restrict access to the RadiantAI HealthSolution, attempt to
                circumvent the intended features, functionality or limitations
                of the RadiantAI Health Solution, or otherwise use, copy,
                distribute, or make available the RadiantAI Health Solution to
                permit timesharing, service bureau use or commercially exploit
                the RadiantAI Health Solution;
              </li>
              <li as="p">
                send, upload, collect, transmit, store, use, post, publish, or
                otherwise communicate on the RadiantAI Health Solution any data,
                information, pictures, videos, audio or other materials or
                content that: (i) contains any computer viruses, worms,
                malicious code, or any software intended to damage or alter a
                computer system or data; (ii) you do not have the lawful right
                to send, upload, collect, transmit, store, use, post, publish,
                or otherwise communicate; (iii) is false, intentionally
                misleading, or impersonates any other person; (iv) is libelous,
                slanderous, defamatory, bullying, harassing, abusive,
                threatening, vulgar, obscene, or offensive, or that contains
                pornography, nudity, or graphic or gratuitous violence, or that
                promotes violence, racism, discrimination, bigotry, hatred, or
                physical harm of any kind against any group or individual; (v)
                is harmful to minors in any way or targeted at minors; (vi)
                infringes, violates or otherwise misappropriates the
                intellectual property or other rights of any third party
                (including any moral right, privacy right or right of
                publicity); or (vii) encourages any conduct that may violate any
                applicable laws or would give rise to civil or criminal
                liability; (viii) discloses or provides information protected
                under any law, agreement or fiduciary relationship, including
                proprietary or confidential information of others; or (ix)
                contains information about an identifiable individual, other
                than as required by RadiantAI Health: (A) to provide support
                services as further set out in the applicable Subscription
                Agreement; or (B) as part of its onboarding process as further
                set out in Section 2 (User Account);
              </li>
              <li as="p">
                use the RadiantAI Health Solution in a manner which, in the
                opinion of RadiantAI Health would tend to bring RadiantAI Health
                or any of its trademarks into public disrepute, contempt,
                scandal or ridicule, would adversely affect the reputation or
                goodwill of RadiantAI Health or any of its the trademarks, or
                adversely affect the relationship between RadiantAI Health and
                any of its licensors or other customers;
              </li>
              <li as="p">
                use the RadiantAI Health Solution to store or transmit material
                that is dangerous, harmful, fraudulent, deceptive, threatening,
                harassing, defamatory, libelous, obscene, or otherwise
                objectionable or unlawful;
              </li>
              <li as="p">
                use the RadiantAI Health Solution for any activities where the
                use or failure of the RadiantAI Health Solution would reasonably
                be expected to result in death, serious personal injury, or
                severe environmental or property damage (such as the creation or
                operation of weaponry);
              </li>
              <li as="p">
                use the RadiantAI Health Solution for materials or activities
                that are subject to the International Traffic in Arms
                Regulations (ITAR) maintained by the United States Department of
                State;
              </li>
              <li as="p">
                copy or store any significant portion of the Content;
              </li>
              <li as="p">
                mirror or frame the RadiantAI Health Solution or any Content,
                place pop-up windows over its pages, or otherwise affect the
                display of its pages; or
              </li>
              <li as="p">
                authorize, permit, enable, induce or encourage any third party
                to do any of the above.
              </li>
            </ol>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">4. License to the RadiantAI Health Solution</Text>
            <Text as="p">
              Subject to these Terms of Use, we grant you anon-exclusive,
              non-transferable, non-sublicensable and revocable licence to use
              the RadiantAI Health Solution in accordance with these Terms of
              Use.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">5. Pricing and Services</Text>
            <Text as="p">
              Subscription and Services options displayed on the RadiantAI
              Health Solution may be discontinued or unavailable for any other
              reason, and prices are subject to change. Except where otherwise
              indicated, all prices do not include any applicable sales taxes,
              which will be added to your total purchase price. You are
              responsible for the payment of any provincial and local sales or
              use taxes that may apply to your Subscription Order. We will
              provide you no less than seven (7) days’ notice prior to
              implementing a change to our prices.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">6. Third Party Content, Websites or Services</Text>
            <Text as="p">
              The RadiantAI Health Solution may provide links or access to third
              party content, websites, or services. Likewise, we may allow you
              to access the RadiantAI Health Solution from third party systems.
              RadiantAI Health does not endorse any third-party content,
              websites, services, or systems, or guarantee or warrant their
              quality, durability, accuracy, reliability, completeness,
              currency, timeliness, non-infringement, merchantability, or
              fitness for any purpose. Third party content, websites, services,
              or systems are not under RadiantAI Health’s control, and if you
              choose to access any such content, websites, or services, or to
              access the RadiantAI Health Solution from such systems, you do so
              entirely at your own risk. You acknowledge that you may be
              required to accept terms of use applicable to third party content,
              websites, services, or systems and agree to accept and comply with
              any such terms of use.
            </Text>
            <Text as="p">
              Your interactions with organizations and/or individuals found on
              or through the RadiantAI Health Solution, including payment and
              delivery of goods and services, and any other terms, conditions,
              warranties or representations associated with such dealings, are
              solely between you and such organizations and/or individuals. You
              agree that to the fullest extent permitted by applicable law
              RadiantAI Health is not responsible or liable for any loss or
              damage of any sort incurred as the result of any such dealings.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">7. Limitation of Liability</Text>
            <Text as="p">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              WILL WE OR OUR PARENTS, SUBSIDIARIES OR AFFILIATES AND OUR AND
              THEIR RESPECTIVE OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES,
              CONTRACTORS, AGENTS, LICENSORS, LICENSEES AND SERVICE PROVIDERS
              AND ITS AND THEIR SUCCESSORS AND ASSIGNS (COLLECTIVELY, THE
              “RADIANTAI HEALTH PARTIES”), BE LIABLE, WHETHER BASED ON WARRANTY,
              CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR ANY OTHER LEGAL
              THEORY, FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL,
              SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR LOST PROFITS, LOSS OF
              USE, LOSS OF DATA, PERSONAL INJURY, FINES, FEES, PENALTIES OR
              OTHER LIABILITIES (COLLECTIVELY, “LOSSES”), IN EACH CASE, WHETHER
              OR NOT WE WERE ADVISED OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF
              SUCH DAMAGES, RESULTING FROM OR RELATED TO THE RADIANTAI HEALTH
              SOLUTION OR THE INABILITY TO MAKE USE OF THE RADIANTAI HEALTH
              SOLUTION, OR THESE TERMS OF USE, INCLUDING, FOR CLARITY, ANY
              LOSSES RESULTING FROM THE ACCESS, COLLECTION, USE, PROCESSING,
              STORING, DISCLOSING OR TRANSMITTING OF API DATA OR FINETUNING DATA
              BY THIRD PARTIES. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE
              RADIANTAI HEALTH SOLUTION, YOUR SOLE AND EXCLUSIVE REMEDY IS TO
              DISCONTINUE USE OF THE RADIANTAI HEALTH SOLUTION.
            </Text>
            <Text as="p">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              WILL WE OR OUR PARENTS, SUBSIDIARIES OR AFFILIATES AND OUR AND
              THEIR RESPECTIVE OFFICERS, DIRECTORS, SHAREHOLDERS, EMPLOYEES,
              CONTRACTORS, AGENTS, LICENSORS, LICENSEES AND SERVICE PROVIDERS
              AND ITS AND THEIR SUCCESSORS AND ASSIGNS (COLLECTIVELY, THE
              “RADIANTAI HEALTH PARTIES”), BE LIABLE, WHETHER BASED ON WARRANTY,
              CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR ANY OTHER LEGAL
              THEORY, FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL,
              SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR LOST PROFITS, LOSS OF
              USE, LOSS OF DATA, PERSONAL INJURY, FINES, FEES, PENALTIES OR
              OTHER LIABILITIES (COLLECTIVELY, “LOSSES”), IN EACH CASE, WHETHER
              OR NOT WE WERE ADVISED OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF
              SUCH DAMAGES, RESULTING FROM OR RELATED TO THE RADIANTAI HEALTH
              SOLUTION OR THE INABILITY TO MAKE USE OF THE RADIANTAI HEALTH
              SOLUTION, OR THESE TERMS OF USE, INCLUDING, FOR CLARITY, ANY
              LOSSES RESULTING FROM THE ACCESS, COLLECTION, USE, PROCESSING,
              STORING, DISCLOSING OR TRANSMITTING OF API DATA OR FINETUNING DATA
              BY THIRD PARTIES. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE
              RADIANTAI HEALTH SOLUTION, YOUR SOLE AND EXCLUSIVE REMEDY IS TO
              DISCONTINUE USE OF THE RADIANTAI HEALTH SOLUTION.
            </Text>
            <Text as="p">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              WILL OUR TOTAL AGGREGATE LIABILITY IN CONNECTION WITH OR UNDER
              THESE TERMS OF USE, OR YOUR USE OF, OR INABILITY TO MAKE USE OF,
              THE RADIANTAI HEALTH SOLUTION, EXCEED$100 CAD. FOR GREATER
              CERTAINTY, THE EXISTENCE OF ONE OR MORE CLAIMS UNDER THESE TERMS
              OF USE WILL NOT INCREASE THIS MAXIMUM LIABILITY AMOUNT.
            </Text>
            <Text as="p">
              Without limiting the foregoing, under no circumstances will any of
              the RadiantAI Health Parties be held liable for any delay or
              failure in performance resulting directly or indirectly from acts
              of nature, forces, or causes beyond our or their reasonable
              control, including, without limitation, Internet failures,
              computer equipment failures, telecommunication equipment failures,
              other equipment failures, electrical power failures, strikes,
              labour disputes, riots, insurrections, civil disturbances,
              shortages of labour or materials, fires, floods, storms,
              explosions, pandemics, acts of God, war, governmental actions,
              orders of domestic or foreign courts or tribunals, or
              non-performance of third parties.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">8. Indemnification</Text>
            <Text as="p">
              You will defend, indemnify and hold harmless the RadiantAI Health
              Parties from and against any claims, causes of action, demands,
              recoveries, losses, damages, fines, penalties or other costs or
              expenses of any kind or nature including reasonable legal and
              accounting fees, arising out of or in connection with: a. your use
              (or the use by any third party using your identification) of the
              RadiantAI Health Solution or the Services (except to the extent
              prohibited by law); b. your breach of any provision of these Terms
              of Use or any documents referenced herein; c. your violation of
              any law or the rights of a third party (including intellectual
              property rights); d. your Customer Data; e. or any viruses, Trojan
              horses, worms, time bombs, spyware, malware, cancelbots or other
              similar harmful or deleterious programming routines input by you
              into the RadiantAI HealthSolution. RadiantAI Health reserves the
              right, at its own cost, to assume the exclusive defence and
              control of any matter otherwise subject to indemnification by you,
              in which event you will fully cooperate with us in asserting any
              available defences. You agree that the provisions in this section
              will survive any termination of your account, the Terms of Use or
              your access to the RadiantAI Health Solution.
            </Text>
          </Box>

          <Box sx={styles.content}>
            <Text as="span">9. General Provisions</Text>
            <ol type='i'>
            <li as="p">
              Choice of Law. Except as restricted by applicable law, these Terms
              of Use will be governed by the laws of the Province of Ontario and
              the federal laws of Canada applicable therein (without giving
              effect to any principles of conflicts of law), and such laws apply
              to your access to or use of the RadiantAI Health notwithstanding
              your physical location. You will only use the RadiantAI Health in
              jurisdictions where the RadiantAI Health may lawfully be used.
              Except as restricted by applicable law, you hereby consent to the
              exclusive jurisdiction and venue of courts in Toronto, Ontario in
              all disputes arising out of or relating to the use of the
              RadiantAI Health Solution. This choice of jurisdiction does not
              prevent us from seeking injunctive relief with respect to a
              violation of intellectual property rights or confidentiality
              obligations in any appropriate jurisdiction.
            </li>
            <li as="p">
              Entire Agreement. These Terms of Use, any applicable Subscription
              Agreement, and any applicable confidential disclosure agreement
              entered into by the parties that references these Terms of Use,
              constitute the entire agreement between you and us pertaining to
              the subject matter hereof and supersede all prior or
              contemporaneous communications and proposals, whether electronic,
              oral or written, between you and us with respect to the RadiantAI
              Health Solution and the Services. A printed version of these Terms
              of Use and of any notice given in electronic form will be
              admissible in judicial or administrative proceedings based upon or
              relating to these Terms of Use (and/or any applicable Subscription
              Agreement) to the same extent and subject to the same conditions
              as other business documents and records originally generated and
              maintained in printed form.
            </li>
            <li as="p">
              Waiver. Our failure to insist upon or enforce strict performance
              of any provision of these Terms of Use will not be construed as a
              waiver of any provision or right. A waiver of any provision of
              these Terms of Use must be in writing and a waiver in one instance
              will not preclude enforcement of such provision on other
              occasions.
            </li>
            <li as="p">
              Severable. If any of the provisions contained in these Terms of
              Use are determined to be void, invalid or otherwise unenforceable
              by a court of competent jurisdiction, such provision will be
              severed from these Terms of Use and all other provisions of these
              Terms of Use will remain in full force and effect.
            </li>
            <li as="p">
              Assignment. You will not assign these Terms of Use to any third
              party without our prior written consent. We may assign these Terms
              of Use or any rights under these Terms of Use to any third party
              without your consent. Any attempted assignment, subcontract,
              delegation, or transfer in violation of this Section will be null
              and void. The terms of these Terms of Use will be binding upon
              permitted assignees. These Terms of Use will inure to the benefit
              of and be binding upon the parties, their permitted successors and
              permitted assignees.
            </li>
            <li as="p">
              Dispute Resolution. If you believe that RadiantAI Health has not
              adhered to these Terms of Use, please contact RadiantAI Health
              using the contact information listed below. We will do our best to
              address your concerns. If you feel that your complaint has been
              addressed incompletely, we invite you to let us know for further
              investigation.
            </li>
            <li as="p">
              English Language. It is the express wish of the parties that these
              Terms of Use and all related documents be drawn up in English.
              C’est la volonté expresse des parties que la présente convention
              ainsi que les documents qui s’y rattachent soient rédigés en
              anglais.
            </li>
            </ol>

          </Box>

          <Box sx={styles.content}>
            <Text as="span">10. Contact</Text>
            <Text as="p">
              If you have any questions or comments regarding these Terms of
              Use, please contact us at team@radiantai.health.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ToU;

const styles = {
  callToAction: {
    mt: ["-90px", null, null, null, "0"],
    pt: ["120px", null, null, null, "110px", null, "140px"],
  },
  flex: {
    flexWrap: "wrap",
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 100%"],
    textAlign: ["center", null, null, null, "left"],
    pt: ["80px", null, null, null, "0"],
    px: ["0px", null, null, null, "200px"],
    maxWidth: ["100%", null, null, "80%", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["30px", null, null, null, "0"],
    span: {
      fontSize: "18px",
      fontWeight: 700,
      color: "primary",
      display: "block",
      lineHeight: 1,
      mt: "20px",
      mb: "10px",
    },
    h3: {
      color: "black",
      fontWeight: 700,
      fontSize: ["23px", null, null, null, "30px", "36px", "44px"],
      maxWidth: ["100%", null, null, null, null, "90%", "100%"],
      lineHeight: 1.36,
      letterSpacing: "-1.5px",
      mt: "20px",
      mb: "30px",
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "heading_secondary",
      opacity: 1,
      mt: "20px",
      mb: "30px",
      pr: ["0", null, null, null, null, "0px"],
    },
  },
  button: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
};
