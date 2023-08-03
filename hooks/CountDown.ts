import { useEffect, useState } from 'react'

const countDown = () => {
    
  const agreement = {
    termOfUse: {
      title: "TERMS OF SERVICE",
      content: [
        {
          subtitle: "",
          text: ' Please read these Terms of Service (Terms, Terms of Service) carefully before using the  websites, including https://www.blowx.ai and all other subdomains, (the Service) operated by BlowX Inc. (us, we, or our), a company incorporated in Dubai - UAE.Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.'
        },
        {
          subtitle: "DISCLAIMER",
          text: 'To the maximum extent permitted under applicable law, the Service is provided on an “as is” and “as available” basis. We expressly disclaim, and you waive, all warranties of any kind, whether express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title and non-infringement as to the Service, including the information, content and materials contained therein.'
        }, 
        {
          subtitle: "ACCEPTABLE USE:",
          text: 
          'To the maximum extent permitted under applicable law, the Service is provided on an “as is” and “as available” basis. We expressly disclaim, and you waive, all warranties of any kind, whether express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title and non-infringement as to the Service, including the information, content and materials contained therein. You agree to use the Service in accordance with the applicable law and regulations and in accordance with these Terms. You are solely responsible for your conduct while using the Service. You must not: Copy, reproduce, modify, distribute, duplicate, copy, sell, resell, license, publicly display or disclose the Service without our prior consent. Share, recompile, decompile, disassemble, reverse engineer, or make or distribute any other form of, or any derivative work from the Service; Use the Service, directly or indirectly, in any manner that could cause the Service so used to: (i) be a substitute for the Service by a third party, (ii) affect BlowX’s ability to realize revenue in connection with the Service, or (iii) compete with BlowX’s business; Store or use data or content in an archival file site, database or other searchable repository except as expressly permitted by this agreement or in an applicable order form. Use any robot, spider, crawler, scraper or other automated means or interface not provided by us to access the Service or to extract data; Use or attempt to use another user’s account without authorization; Attempt to circumvent any content filtering techniques we employ, or attempt to access any service or area of the Service that you are not authorised to access; Introduce to the Service any virus, trojan worms, logic bombs or other harmful material or otherwise hack the Service; Develop any third-party applications that interact with the Service without our prior written consent; We reserve the right to determine whether a use of the Service is in violation of these Terms or fails to constitute acceptable use.'
        }, 
        {
          subtitle: "ACCESSING NANSEN USING WEB3 SERVICES:",
          text: 
          'BlowX leverages blockchain, Ai and web3 services to provide our end users the ability to sign up with, or associate their existing account, to their blockchain address which functions as an extension of their personal identity and can be used to as a form of accessing the platform. By using this feature BlowX assumes the right to collect your blockchain wallet address, completed transaction information and token identifiers for the purpose of enabling this feature. Wallets are not maintained by, operated by, or affiliated with BlowX. BlowX has no control over the contents of your wallet and does not accept any responsibility for, or liability to you, in connection with your usage of a wallet on the BlowX ecosystem. You, as the user and owner of the wallet, are solely responsible for keeping your wallet secure. You should never share credentials or seed phrases of your wallet with anyone and BlowX will never ask for this information under any circumstances. Any issues noted with your wallet, should be directed to and discussed with your wallet provider.'
        },
        {
          subtitle: "ACCESSING BLOWX CONNECT:",
          text: 
          'You understand and agree that BlowX does not and will not attempt to monitor or remove any content in your direct messages on BlowX Connect. You assume full responsibility and risk for access to or use of such content and for use of the BlowX Connect service. BlowX assumes no liability whatsoever for any claims or losses arising out of or otherwise relating to access to or use of content.'
        }, 
        {
          subtitle: "THIRD-PARTY LINKS:",
          text: 
          'The Service may contain links to third-party web sites or services that are not owned or controlled by BlowX. BlowX has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that BlowX shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.'
        },   
        {
          subtitle: "INTELLECTUAL PROPERTY RIGHTS:",
          text: 
          'We retain all rights, including all copyright and other intellectual property rights, in all content and other materials contained on our website or provided in connection with the Service. You receive no license or usage rights to the Service other than what is explicitly stated in these Terms.'
        }, 
        {
          subtitle: "LIMITATION:",
          text: 
          'Except as otherwise required by law, in no event shall we be liable for any special, indirect or consequential damages, or any other damages of any kind, including but not limited to loss of use, loss of profits or loss of data, arising out of or in any way connected with the use of or inability to use the Service, including without limitation any damages resulting from reliance by you on any information obtained from using the Service.'
        },
        {
          subtitle: "MAINTENANCE:",
          text: 
          ' We may temporarily suspend the Service from time to time for maintenance. We do not warrant any particular level of Service availability.'
        },
        {
          subtitle: "TERMINATION:",
          text: 
          'We may terminate or suspend access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.'
        },
        {
          subtitle: "WAIVER:",
          text: 
          'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding the Service, and supersede and replace any prior agreements we might have between us regarding the Service.'
        },
        {
          subtitle: "CHANGES:",
          text: 
          'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to notify you prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use the Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.'
        },
        {
          subtitle: "GOVERNING LAW AND JURISDICTION:",
          text: 
          'These Terms shall be governed and construed in accordance with the laws of Dubai - UAE, without regard to its conflict of law provisions. You irrevocably agree that the United Arab Emirates courts shall have non-exclusive jurisdiction to hear and decide any suit, action or proceedings or settle any dispute arising out of or in connection with the Service.'
        },
        {
          subtitle: "CONTACT US",
          text: 
          'If you have any questions about these Terms, please contact us via email: support@blowx.ai'
        }
      ]
    },
    policy: {
      title: "Privacy Policy",
      content: [
        {
          subtitle: "INTRODUCTION",
          text: 
          'We at BlowX Inc (“BlowX”, “we”, “us”, or “our”) understand that our users care about how their Personal Data (as defined below) is handled. This Privacy Policy describes our data processing activities and practices when visitors and users access our websites and services, which includes our content on https://www.blowx.ai and other subdomains. Please take a moment to read this Privacy Policy carefully. You may contact us in the manner stated in this Privacy Policy if you have any questions. This Privacy Policy supplements but does not supersede nor replace any other consents you may have previously provided to us in respect of your Personal Data, and any consents you may have provided in connection with this Privacy Policy are cumulative and additional to any rights which we may have under applicable law to handle or process your Personal Data. We reserve the right to revise this Privacy Policy from time to time. While you should regularly check this Privacy Policy and determine if any such revision has taken place by referring to the date on which this Privacy Policy was last updated, we may also notify you of updates to this Privacy Policy in any form as we may deem appropriate or, where required by applicable law, by posting a notice or reaching you via other forms of communication.'
        },
        {
          subtitle: "ACCEPTANCE OF THIS PRIVACY POLICY:",
          text: 
          'By interacting with us, submitting information to us, or signing up for any of our products or services on our websites, you agree and consent to our processing of your Personal Data, including by our authorised service providers, in the manner and for any of our purposes set forth in this Privacy Policy. If you do not agree with or you are not comfortable with any aspect of this Privacy Policy, you should immediately discontinue access or use of our websites and services.'
        },
        {
          subtitle: "COLLECTION OF PERSONAL DATA:",
          text: 
          'Personal Data means: (a) any data relating to an identified or identifiable natural person; or (b) “personal data,” “personal information,” “personally identifiable information” or similar term as defined under applicable data protection laws. The amount and types of Personal Data that we collect and process depends on the nature of your interaction with us. Generally, we may collect and process the following: Account and profile information, such as email addresses, passwords and/or blockchain wallet addresses; Payment and transaction information, such as the name of the credit/debit cardholder, credit/debit card number, country, city, state, address, and/or blockchain wallet transactions. We may use third-party vendors to collect and process payment information; Contact information, such as usernames in third party services such as Telegram or Discord, first and last names, email addresses, professional titles, company names, and/or phone numbers; Technical information and usage data, such as statistical and site-related information relating to how a visitor arrived at our websites or platforms, the IP address which may provide information about precise or approximate location, device information, clickstream information and time stamp, and information about how you use our websites and services. We may automatically receive and record such information from our server logs or cookies. For more information, please see the section on Cookies below; Marketing and communications data, such as your preferences in receiving marketing messages from us, your communication preferences and history of communications with us, our service providers or third parties; and/or Other information, which may include your participation in our contests, promotions, or surveys, and photographs, videos and/or audio recordings taken by us or our representatives. We may also collect and process information from third-party sources, which may include public records, social media platforms, and blockchain data about records or histories of transactions occurring on the applicable blockchain for a blockchain wallet address. We may also offer features that help users invite or refer their friends or contacts to use our services, and we may collect Personal Data (such as contact details) about these invitees or referrals so we can reach out to them. Please do not refer someone to us or share their contact details or Personal Data with us unless you have their permission or consent to do so. While labelling blockchain wallet addresses is an integral part of our business, we do not use Personal Data of our users (such as the blockchain wallet addresses in their account or profile information) to add or publish such labels or otherwise reveal the identity of any natural person as the owner of any given blockchain wallet address. In addition, we do not take any other steps that would reveal the identity of any natural person as the owner of any given blockchain wallet address or otherwise make them identifiable (taking account of the means reasonably likely to be used to identify them). Indeed, at BlowX, we do not have the technical ability to effect any such identification of owners of blockchain wallet addresses ourselves – we have also adopted and implemented technical and organisational measures to further cement the fact that no such identification should occur in the ordinary course of our business. There may be limited exceptions to this general rule, for example, we may add labels about a high-profile public figure who has publicly declared their blockchain wallet address; however, such circumstances cover a statistically insignificant percentage of the blockchain wallet address-related information we use to provide our websites and services.'
        },
        {
          subtitle: "COLLECTION OF PERSONAL DATA:",
          text: 
          'Personal Data means: (a) any data relating to an identified or identifiable natural person; or (b) “personal data,” “personal information,” “personally identifiable information” or similar term as defined under applicable data protection laws. The amount and types of Personal Data that we collect and process depends on the nature of your interaction with us. Generally, we may collect and process the following: Account and profile information, such as email addresses, passwords and/or blockchain wallet addresses; Payment and transaction information, such as the name of the credit/debit cardholder, credit/debit card number, country, city, state, address, and/or blockchain wallet transactions. We may use third-party vendors to collect and process payment information; Contact information, such as usernames in third party services such as Telegram or Discord, first and last names, email addresses, professional titles, company names, and/or phone numbers; Technical information and usage data, such as statistical and site-related information relating to how a visitor arrived at our websites or platforms, the IP address which may provide information about precise or approximate location, device information, clickstream information and time stamp, and information about how you use our websites and services. We may automatically receive and record such information from our server logs or cookies. For more information, please see the section on Cookies below; Marketing and communications data, such as your preferences in receiving marketing messages from us, your communication preferences and history of communications with us, our service providers or third parties; and/or Other information, which may include your participation in our contests, promotions, or surveys, and photographs, videos and/or audio recordings taken by us or our representatives. We may also collect and process information from third-party sources, which may include public records, social media platforms, and blockchain data about records or histories of transactions occurring on the applicable blockchain for a blockchain wallet address. We may also offer features that help users invite or refer their friends or contacts to use our services, and we may collect Personal Data (such as contact details) about these invitees or referrals so we can reach out to them. Please do not refer someone to us or share their contact details or Personal Data with us unless you have their permission or consent to do so. While labelling blockchain wallet addresses is an integral part of our business, we do not use Personal Data of our users (such as the blockchain wallet addresses in their account or profile information) to add or publish such labels or otherwise reveal the identity of any natural person as the owner of any given blockchain wallet address. In addition, we do not take any other steps that would reveal the identity of any natural person as the owner of any given blockchain wallet address or otherwise make them identifiable (taking account of the means reasonably likely to be used to identify them). Indeed, at BlowX, we do not have the technical ability to effect any such identification of owners of blockchain wallet addresses ourselves – we have also adopted and implemented technical and organisational measures to further cement the fact that no such identification should occur in the ordinary course of our business. There may be limited exceptions to this general rule, for example, we may add labels about a high-profile public figure who has publicly declared their blockchain wallet address; however, such circumstances cover a statistically insignificant percentage of the blockchain wallet address-related information we use to provide our websites and services.'
        },
        {
          subtitle: "PURPOSES FOR PROCESSING OF YOUR PERSONAL DATA:",
          text: 
          'Where permitted under applicable law, BlowX processes your Personal Data for the following purposes (which may apply even if you do not maintain an account or have terminated your account with us): providing you with products and/or services which you have purchased or requested to receive, and to personalise and customise your experience on our services, including to recommend features or content which may be relevant to you based on your usage of our services, your profile information and preferences, and other information that you submitted to us; for the development and improvement of our products, services, processes and/or business, such as through the use of technical and usage data, as well as aggregated, de-identified, and/or anonymized data to understand user behaviour and market trends; to communicate with you, such as notifying you of any service issues and account updates, handling and responding to your queries, requests, feedback and suggestions, or sending you direct marketing messages or interest-based advertising, when carried out in our legitimate interests or in accordance with applicable law; managing our business operations and complying with internal policies and procedures, including but not limited to keeping records for tax purposes, managing and preparing reports on incidents and accidents, protecting and enforcing our contractual and legal rights and obligations, and facilitating business asset transactions; complying with any applicable laws and regulations, rules, codes of practice or guidelines, or to assist in law enforcement and investigations by relevant authorities; facilitating your account registration and transactions, whether through verifying your blockchain wallet address or otherwise; matching any Personal Data held which relates to you for any of the purposes listed herein; and/or any other purpose relating to or reasonably necessary for any of the above.In relation to particular products or services or in your interactions with us, we may also have provided additional "just-in-time" disclosures or specifically notified you of other purposes for which we process your Personal Data. These notices may supplement or clarify our privacy practices or may provide you with additional choices about how we process your Personal Data for these purposes as well.'
        },
        {
          subtitle: "DISCLOSURE OF PERSONAL DATA:",
          text: 
          'Subject to applicable law, your Personal Data may be provided, for the purposes listed above (where applicable), to the following entities or parties, whether they are located overseas or in any country of jurisdiction where BlowX operates: vendors, agents, service providers and other organisations who we engage to provide goods and services either independently or on our behalf in connection with any of the purposes listed above in this Privacy Policy, such as payment processors, cloud service providers, analytics and search engine providers, marketing partners, and customer support; any business partner, investor, assignee or transferee (actual or prospective) to facilitate business asset transactions (which may extend to any merger, acquisition or any debt or asset sale); our professional advisers such as our board of directors, auditors, cybersecurity consultants and lawyers; relevant government regulators, ministries, statutory boards or authorities and/or law enforcement agencies, to comply with any directions, laws, rules, guidelines, regulations or requests issued or administered by any of them; and/or any other party to whom you authorise us to disclose your Personal Data to.'
        },
        {
          subtitle: "THIRD-PARTY SITES:",
          text: 
          'Our websites and services may contain links to other websites or services operated or provided by third parties. We are not responsible for the privacy practices of such websites or services operated or provided by third parties, whether or not these third party websites or services may carry our logo or trademark even though they are not operated or maintained by us. Once you have left our websites or services, you should check the applicable privacy policy of the third party website or service to determine how they will handle any information they collect from you.'
        },
        {
          subtitle: "DATA SECURITY:",
          text: 
          'We have implemented technical and organizational measures designed to protect your Personal Data from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or method of electronic storage is completely secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security, or that no malicious attacker or harmful code will enter or target our websites or services (for example, viruses, bugs, trojan horses, spyware or adware).'
        },
        {
          subtitle: "CHILDREN:",
          text: 
          'Our website is not intended for use by anyone under 18 years of age. If you are a parent or guardian of a child from whom you believe we have collected Personal Data in a manner prohibited by law, please contact us. If we learn that we have collected Personal Data from a child without the consent of the child’s parent or guardian as required by law, we will comply with applicable legal requirements to delete the information.'
        },
        {
          subtitle: "COOKIES:",
          text: 
          'Cookies are small text files stored in your browsers file directory when you visit our websites and platforms, so that the next time you visit our website or platform, your browser will read the cookie and relay the information back to us or third party companies which provide us with web analytics and intelligence about our websites and platforms. Our websites and platforms may use cookies as follows: as necessary in order to enable our websites and platforms to operate, for example, to enable you to log onto secure parts of our websites and platforms; to collate information on your search and browsing history within our websites and platforms in order to better tailor our products and services to your interests and needs, such as to personalise the websites and platforms for you and deliver prompts which may be of particular interest to you; to track and compile statistics about visitors who interact with the websites, platforms and other BlowX online content; and/or making our websites and platforms easier to use, for example, to help speed up your future interactions with our websites and platforms by storing your selected inputs so that you are not constantly asked for the same information.'
        },
        {
          subtitle: "YOUR CHOICES:",
          text: 
          'Most browsers let you remove or reject cookies. To do this, follow the instructions in your browser settings. Many browsers accept cookies by default until you change your settings. Please note that if you delete or disable the cookies associated with our websites and platforms by changing the settings on your browser, this may impact your user experience while on our websites or platforms, including but not limited to your ability to enter or use certain part(s) of our websites or platforms. For more information about cookies, including how to see what cookies have been set on your browser and how to manage and delete them, visit www.allaboutcookies.org. Some Internet browsers may be configured to send “Do Not Track” signals to the online services that you visit. We currently do not respond to “Do Not Track” signals. To find out more about “Do Not Track,” please visit http://www.allaboutdnt.com. If you have registered for an account with us, you may review and update certain account information by logging into your account, or by contacting us in the manner specified below. You should ensure that all Personal Data submitted to us is accurate, true and correct, as failure on your part to do so may affect our ability to provide you with any products and/or services.'
        },
        {
          subtitle: "WE DO NOT TARGET OUR WEBSITES OR SERVICES AT EUROPEAN OR U.S INDIVIDUALS:",
          text: 
          'Please note that we do not take any deliberate steps to direct the offering of our websites or services at individuals located in the European Economic Area and/or the United Kingdom and the United States (together, “Europe/US”). For example, we do not accept payment for our services in the currency of any country(ies) in Europe and United States, we do not take any steps to target sales of our services to individuals in Europe and United States, we do not take any ‘search engine optimisation’ related steps intended to facilitate the use, promotion or availability of our websites or services by or to users in Europe and United States etc. In addition, we do not take any steps to monitor any behaviours of any individuals that we are aware (or have any reasonable means to be aware) occur in Europe, UK and United States. In particular, we do not use any Personal Data (including any such data collected through analytics technologies deployed on the website) in any way that has a specific purpose in mind, whether concerning its initial collection or any further use, that relates to any individual’s behaviour occurring within Europe, UK and United States.'
        },
        {
          subtitle: "CONTACTING US – QUESTIONS, FEEDBACK, AND EXERCISING YOUR RIGHTS:",
          text: 
          'If you: have any questions or feedback relating to your Personal Data or our Privacy Policy; would like to obtain access and make corrections to your Personal Data records, subject to applicable law; would like to withdraw your consent to any processing of your Personal Data or delete your Personal Data, subject to applicable law, you can email us at support@blowx.ai. Please note that if you have provided your Personal Data to a third party, you should contact such third party directly. While we respect your decision to withdraw your consent to any processing of your Personal Data, please note that depending on the nature of your request, BlowX may not be in a position to continue to provide its products or services to you, administer any contractual relationship already in place, or perform or conclude an existing or prospective agreement. This may also result in the termination of any agreements you have with BlowX, and your being in breach of your contractual obligations or undertakings. BlowX’s legal rights and remedies in such event are expressly reserved. Please also note that withdrawing consent does not affect our right to continue to process Personal Data where such processing without consent is permitted or required under applicable laws. Upon receipt of your written request, we may require reasonable time to process your request and for us to notify you of the consequences of us acceding to the same, including any legal consequences which may affect your rights and liabilities to us. In general, we shall seek to process your request within thirty (30) days of receiving it, and will inform you should we require more time or information from you to process the request (which may depend on the complexity of the request, the rights and exemptions under applicable law, and the impact on our relationship with you). Data Protection Officer. If you need to reach our Data Protection Officer, you may contact us at dataprotection@blowx.ai.'   
        },
]
    },
    cookies: {
      title: "COOKIES",
      content: [
        {
          subtitle: "COOKIES USE",
          text: 'We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of ALL the cookies. However, you may visit Cookie Settings to provide a controlled consent.'
        }
      ]
    }
  }

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
   
      useEffect(() => {
        const interval = setInterval(() => {
          const targetDate = new Date("2023-09-01"); // Set your target date here
          const now = new Date();
        //   @ts-ignore
          const timeDifference = targetDate - now;
   
          if (timeDifference <= 0) {
            clearInterval(interval);
          } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
   
            setCountdown({ days, hours, minutes, seconds });
          }
        }, 1000);
   
        return () => {
          clearInterval(interval);
        };
      }, []);

  return {countdown, agreement}
}

export default countDown
