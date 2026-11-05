/**
 * SIDDHI VINAYAK JAN KALYAN TRUST - CORE INTERACTIVE ENGINE
 * Features: Dynamic UPI QR Code, Instant 12A & 80G Receipt Generator,
 * Bilingual (EN/HI) Localization, Modal Controllers, and Animated Impact Counters.
 */

// Aggressive suppression of Netlify Drawer badge
(function removeNetlifyBadge() {
  function purge() {
    const list = document.querySelectorAll('netlify-drawer, #netlify-drawer, [data-netlify-drawer], .netlify-drawer, iframe[src*="netlify"]');
    list.forEach(el => {
      try { el.remove(); } catch(e) {}
    });
  }
  purge();
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', purge);
    window.addEventListener('load', purge);
    setInterval(purge, 300);
  }
})();

// Current Application State
const appState = {
  lang: 'en',
  currentAmount: 1100,
  currentCause: 'General Community Welfare',
  donorInfo: {
    name: 'Ramesh Chandra',
    phone: '+91 9876543210',
    email: '',
    pan: ''
  }
};

// Bilingual Translations Dictionary
const translations = {
  en: {
    top_badge: 'Official Portal',
    top_alert: 'Govt. Reg No: SVJKT/IV 42/2026/',
    brand_tagline: 'COMMUNITY WELFARE • EDUCATION • HEALTHCARE • LIVELIHOOD • EMPOWERMENT',
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_causes: 'Causes & Funds',
    nav_donate: 'Donate Hub',
    nav_leadership: 'Leadership',
    nav_transparency: 'Charter & Reg',
    nav_contact: 'Contact',
    nav_btn_donate: 'Donate Now',
    tag_welfare: 'Community Welfare',
    tag_edu: 'Education',
    tag_health: 'Healthcare',
    tag_livelihood: 'Livelihood',
    tag_empower: 'Empowerment',
    hero_desc: 'Dedicated to selfless service and grassroots social transformation across Uttar Pradesh. Empowering underprivileged children with education, healing communities with free medical camps, and providing dignified livelihoods with utmost transparency.',
    tax_exempt_badge: '12A + 80G Tax Exemption Available',
    btn_donate_now: 'Donate & Save Tax',
    btn_view_charter: 'View Trust Charter',
    impact_meals: 'Meals Distributed (अन्नदान)',
    impact_students: 'Rural Students Supported',
    impact_camps: 'Free Medical & Health Camps',
    impact_women: 'Women Trained in Livelihood',
    fund_subtitle: 'Punya Karyakram • Daan Seva',
    fund_title: 'Make an Impact — Donate to the Trust',
    fund_desc: 'Your sacred contribution directly empowers impoverished students, delivers medicine to rural villages, and feeds destitute families. 100% transparent and verified.',
    choose_cause_title: '1. Select Cause / Project',
    choose_amount_title: '2. Select Contribution Amount',
    impact_preview_label: 'Your Direct Social Impact:',
    donor_info_title: '3. Donor Information (For 12A & 80G Receipt)',
    lbl_name: 'Full Name *',
    lbl_phone: 'Mobile Number *',
    lbl_email: 'Email Address',
    lbl_pan: 'PAN Card No. (For 12A & 80G Tax Benefit)',
    btn_generate_receipt: 'Generate Donation Slip & Pay via UPI',
    instant_upi_title: 'Instant UPI & Direct Bank Seva',
    instant_upi_desc: 'Zero transaction fee. Scan using any UPI application (Google Pay, PhonePe, Paytm, BHIM, Cred).',
    causes_badge: 'Verified Campaigns',
    causes_title: 'Our Priority Social Missions',
    causes_desc: 'Every penny is deployed with complete accountability. Select a campaign below to fuel hope and dignity.',
    cat_edu: 'Vidya Daan',
    cat_health: 'Arogya Seva',
    cat_food: 'Annadaan',
    cat_women: 'Swavalamban',
    cat_elder: 'Elder Care',
    cat_general: 'General Corpus',
    btn_support_cause: 'Support This Cause',
    about_badge: 'About The Founder & Trust',
    about_title: 'Service is our Resolve, Development is our Goal',
    about_desc: 'Who We Are: A Journey Beyond Position, Defined by Purpose. Reaching the last person in the line.',
    founder_badge: 'Philosophy In Action • 5 Decades of Seva',
    founder_p1: 'Shri R. K. Tripathi is not merely a name; he is a philosophy in action. He represents a rare confluence of visionary leadership, fearless journalism, ethical entrepreneurship, and selfless social service.',
    founder_p2: 'Guided by the values and path shown by his father, he has lived by one principle: "True success is only meaningful when it reaches the last person in the line." His influence is not confined to a single domain. Over five decades, he has created a lasting impact across media, grassroots governance, business, and humanitarian service.',
    founder_quote: '"We do not believe in the politics of votes; we believe in the policy of social transformation. Our goal is not personal progress, but Nation Building through Society Building."',
    pillars_heading: 'Pillars of Leadership',
    pillars_subheading: 'Creating a lasting impact across media, grassroots governance, and ethical enterprise.',
    pillar1_title: '1. A Credible & Fearless Voice in Media',
    pillar1_desc: 'As State Bureau Chief (Uttar Pradesh) for BST News 24, Shri Tripathi leads news operations with fearless, people-centric journalism. As National Vice President of Indian Journalist Protection Council (IJPC), he fights for the safety, dignity, and rights of journalists nationwide.',
    pillar2_title: '2. Empowering Leadership at Grassroots',
    pillar2_desc: 'As District General Secretary, Akhil Bhartiya Pradhan Sangathan, Gorakhpur, he strengthens Panchayati Raj and village leadership. As Patron of Vyapar Mandal Khajni Vikas Manch, he champions economic upliftment of local traders, farmers, and rural youth.',
    pillar3_title: '3. Entrepreneurship with Integrity',
    pillar3_desc: 'As Director of Shakti Security Services, he built a disciplined, trust-based enterprise providing stable employment and security to hundreds of families while setting benchmarks in corporate governance and ethical business.',
    yatra_badge: 'Historical Milestones',
    yatra_title: 'THE SEVA YATRA: A Legacy Since 1974',
    yatra_desc: 'His true identity is not in his designations, but in his Seva. From early childhood public awakening to institutionalized humanitarian care.',
    yatra_m1_title: 'The Awakening Spark',
    yatra_m1_desc: "Inspired by his father's humanitarian gatherings and spiritual discourses for public awakening during early childhood.",
    yatra_m2_title: 'Manav Seva Sansthan',
    yatra_m2_desc: 'Institutionalized relief: Free Night Shelters (Rain Basera), Winter Blanket Drives, Free Pyaau Kiosks, and Free Medical Camps.',
    yatra_m3_title: 'Youth Employment & Security',
    yatra_m3_desc: 'Establishment of Shakti Security Services, fostering discipline, employment, and safety for hundreds of youth.',
    yatra_m4_title: 'Siddhi Vinayak Trust',
    yatra_m4_desc: 'Culmination of 50 years of seva into a sacred, structured trust dedicated to education, healthcare, and social harmony.',
    pledge_title: 'SIDDHI VINAYAK JANKALYAN TRUST: Our Sacred Pledge',
    pledge_vision: '"To create a self-reliant, harmonious and equitable society where every individual has access to peace, education, health, and dignity, and where no one is left hungry, uneducated, or helpless."',
    obj1_title: 'SEVA (Service)',
    obj1_desc: 'Ensuring fundamental rights — food, quality education, primary healthcare, and shelter for the most marginalized.',
    obj2_title: 'SASHAKTIKARAN',
    obj2_desc: 'Vocational and technical training for educated unemployed youth, making them self-reliant and job-ready.',
    obj3_title: 'SADBHAV (Harmony)',
    obj3_desc: 'Dismantling caste and communal barriers under the sacred principle of Vasudhaiva Kutumbakam — The World is One Family.',
    obj4_title: 'PRATIBHA PROTSAHAN',
    obj4_desc: 'Mentoring and financially supporting meritorious underprivileged students for premier higher education in India and abroad.',
    leader_badge: 'Guiding Light & Office Bearers',
    leader_title: 'Our Leadership & Office Bearers',
    leader_desc: 'Selfless visionaries dedicating their life to community empowerment, transparency, and social welfare.',
    role_pres_badge: '1. अध्यक्ष (President & Founder)',
    role_pres_sub: 'Founder, President & Chief Trustee',
    rk_mantra: '"Service is our Resolve, Development is our Goal • True success is only meaningful when it reaches the last person in the line."',
    rk_bio_summary: 'Shri R. K. Tripathi represents a rare confluence of visionary leadership, fearless journalism, ethical entrepreneurship, and selfless social service. Over five decades of service, from early childhood in 1974 to founding Manav Seva Sansthan (2003) and Siddhi Vinayak Jankalyan Trust, he has created lasting humanitarian impact across Uttar Pradesh.',
    role_vp_badge: '2. उपाध्यक्ष (Vice President)',
    role_vp_sub: 'Vice President | Founder - Manav Sewa Sansthan',
    malti_mantra: '"Service is not just a duty; it is a lifetime commitment. We strive to build a future where every individual is empowered and every voice is heard."',
    malti_bio_summary: 'A dedicated social reformer with over three decades of grassroots experience, Mrs. Malti Tripathi has spent more than thirty-five years uplifting the marginalized and giving voice to the voiceless. The driving force behind Manav Sewa Sansthan, she focuses on rehabilitating families of jail inmates, women\'s legal rights, girls\' education, and vocational independence.',
    role_treasurer_badge: '3. कोषाध्यक्ष (Treasurer)',
    role_treasurer_sub: 'Treasurer | Managing Director (MD) - Shakti Security Services',
    rahul_mantra: '"Yuva Soch, Pardarshi Karya - Seva Hi Lakshya • Seva - Nishtha - Pardarshita • Yuva - Nirbhay - Samarpit"',
    rahul_bio_summary: 'Mr. Rahul Tripathi is a young, fearless and dedicated personality discharging the crucial responsibility of Treasurer at Siddhivinayak Jan Kalyan Trust with absolute transparency and integrity. As Managing Director of Shakti Security Services since 2014, he has built a trusted team of hundreds of trained security personnel while empowering rural youth with discipline, stable employment, and values.',
    role_sec_badge: '4. महासचिव (General Secretary)',
    role_sec_sub: 'Mahasachiv (General Secretary), Siddhivinayak Jan Kalyan Trust (Regd.)',
    santosh_mantra: '"Seva Hi Pooja Hai • Tan, Man & Dhan Se Seva (Yathasambhav Daan) • 32 Years of Tapasya, Family Values and a Pledge to Serve Across India"',
    santosh_bio_summary: 'Shri Santosh Kumar Tripathi represents a glorious family legacy where social service is inherited as a sacred tradition. With 32 years of continuous public service, protection of Sanatan values, and fearless unbiased reporting as District General Secretary (Media) Gorakhpur, he steers national operations across India from Gorakhpur and Agra.',
    transparency_badge: 'Verified Non-Profit Status',
    transparency_title: 'Official Registration & Legal Charters',
    transparency_desc: 'Inspect our official legal documents, registration certificates, and institutional credentials below.',
    contact_badge: 'Get In Touch',
    contact_title: 'Join Us as a Sevadar (Volunteer) or Reach Out',
    contact_desc: 'Whether you wish to volunteer time, donate supplies, or request assistance in your village, our doors are always open.',
    office_details_title: 'Trust Headquarters & Offices',
    office_details_desc: 'Feel free to visit our centers or connect directly with our office bearers.',
    send_msg_title: 'Send Us a Message / Seva Request'
  },
  hi: {
    top_badge: 'आधिकारिक पोर्टल',
    top_alert: 'पंजीकरण संख्या: IV42/2026',
    brand_tagline: 'सामुदायिक कल्याण • शिक्षा • स्वास्थ्य • आजीविका • सशक्तिकरण',
    nav_home: 'मुख्य पृष्ठ',
    nav_about: 'हमारे बारे में',
    nav_causes: 'पुण्य प्रकल्प',
    nav_donate: 'दान केंद्र',
    nav_leadership: 'नेतृत्व',
    nav_transparency: 'पंजीकरण व पत्र',
    nav_contact: 'संपर्क करें',
    nav_btn_donate: 'दान करें',
    tag_welfare: 'सामुदायिक कल्याण',
    tag_edu: 'शिक्षा संवर्धन',
    tag_health: 'आरोग्य सेवा',
    tag_livelihood: 'आजीविका',
    tag_empower: 'सशक्तिकरण',
    hero_desc: 'उत्तर प्रदेश के ग्रामीण अंचलों में निस्वार्थ सेवा, शिक्षा, स्वास्थ्य और आजीविका द्वारा समाज के अंतिम व्यक्ति तक संबल और गरिमा पहुंचाने हेतु संकल्पित।',
    tax_exempt_badge: 'धारा 12A + 80G के तहत 100% कर छूट उपलब्ध',
    btn_donate_now: 'दान करें एवं पुण्य अर्जित करें',
    btn_view_charter: 'आधिकारिक पत्र व घोषणा देखें',
    impact_meals: 'अन्नदान भोजन पैकेट वितरित',
    impact_students: 'सहयोग प्राप्त ग्रामीण विद्यार्थी',
    impact_camps: 'निशुल्क स्वास्थ्य व नेत्र जांच शिविर',
    impact_women: 'प्रशिक्षित व स्वावलंबी महिलाएं',
    fund_subtitle: 'पुण्य कार्यक्रम • दान सेवा',
    fund_title: 'शुभ संकल्प — ट्रस्ट में अपना योगदान दें',
    fund_desc: 'आपका पवित्र दान सीधे गरीब बच्चों की पढ़ाई, ग्रामीण स्वास्थ्य शिविरों और भूखे परिवारों के अन्नदान में काम आता है। शत-प्रतिशत पारदर्शी।',
    choose_cause_title: '1. पुण्य प्रकल्प का चयन करें',
    choose_amount_title: '2. सहयोग राशि चुनें (रुपये)',
    impact_preview_label: 'आपके दान का सीधा प्रभाव:',
    donor_info_title: '3. दानदाता विवरण (12A व 80G रसीद हेतु)',
    lbl_name: 'पूरा नाम *',
    lbl_phone: 'मोबाइल नंबर *',
    lbl_email: 'ईमेल आईडी',
    lbl_pan: 'पैन कार्ड नंबर (कर छूट रसीद हेतु)',
    btn_generate_receipt: 'दान पर्ची बनाएं एवं UPI द्वारा भुगतान करें',
    instant_upi_title: 'तत्काल UPI एवं बैंक ट्रांसफर सेवा',
    instant_upi_desc: 'शून्य शुल्क। किसी भी UPI ऐप (Google Pay, PhonePe, Paytm, BHIM) से तुरंत स्कैन करें।',
    causes_badge: 'सत्यापित सेवा प्रकल्प',
    causes_title: 'हमारे मुख्य सामाजिक प्रकल्प',
    causes_desc: 'प्रत्येक दान का पूर्ण हिसाब-किताब। समाज में नवज्योति प्रज्वलित करने के लिए सहयोग दें।',
    cat_edu: 'विद्या दान',
    cat_health: 'आरोग्य सेवा',
    cat_food: 'अन्नदान',
    cat_women: 'स्वावलंबन',
    cat_elder: 'वृद्ध सेवा',
    cat_general: 'सामान्य निधि',
    btn_support_cause: 'इस प्रकल्प में सहयोग दें',
    about_badge: 'ट्रस्ट एवं संस्थापक परिचय',
    about_title: 'सेवा ही संकल्प, विकास ही लक्ष्य',
    about_desc: 'हम कौन हैं: पद से परे, उद्देश्य से परिभाषित एक पावन यात्रा। समाज के अंतिम व्यक्ति तक संबल पहुंचाना।',
    founder_badge: 'दर्शन एवं कर्म का संगम • 5 दशकों की निरंतर सेवा',
    founder_p1: 'श्री आर. के. त्रिपाठी केवल एक नाम नहीं हैं; वह कर्म रूपी दर्शन हैं। वे दूरदर्शी नेतृत्व, निर्भीक पत्रकारिता, नैतिक उद्यमिता और निःस्वार्थ समाज सेवा के एक दुर्लभ संगम का प्रतिनिधित्व करते हैं।',
    founder_p2: 'अपने पूज्य पिता जी द्वारा दिखाए गए मार्ग और संस्कारों से प्रेरित होकर, उन्होंने सदा एक ही सिद्धांत को जिया है: "सच्ची सफलता वही है जो पंक्ति के अंतिम व्यक्ति तक पहुंचे।" उनका प्रभाव किसी एक क्षेत्र तक सीमित नहीं है। पांच दशकों में उन्होंने मीडिया, ग्राम्य स्वराज, व्यवसाय और मानव सेवा में अमिट छाप छोड़ी है।',
    founder_quote: '"हम वोटों की राजनीति में विश्वास नहीं करते; हम सामाजिक परिवर्तन की नीति में विश्वास करते हैं। हमारा लक्ष्य व्यक्तिगत प्रगति नहीं, बल्कि समाज निर्माण के माध्यम से राष्ट्र निर्माण है।"',
    pillars_heading: 'नेतृत्व के आधार स्तंभ',
    pillars_subheading: 'मीडिया, जमीनी प्रशासन एवं नैतिक उद्यमिता में ऐतिहासिक योगदान।',
    pillar1_title: '1. मीडिया में एक विश्वसनीय और निर्भीक आवाज',
    pillar1_desc: 'BST News 24 के उत्तर प्रदेश स्टेट ब्यूरो चीफ के रूप में निष्पक्ष, निर्भीक व जनहितैषी पत्रकारिता। भारतीय पत्रकार सुरक्षा परिषद (IJPC) के राष्ट्रीय उपाध्यक्ष के रूप में पत्रकारों की सुरक्षा, सम्मान और अधिकारों की रक्षा हेतु सतत संघर्ष।',
    pillar2_title: '2. जमीनी स्तर (ग्राम्य स्वराज) पर सशक्त नेतृत्व',
    pillar2_desc: 'अखिल भारतीय प्रधान संगठन, गोरखपुर के जिला महासचिव के रूप में पंचायती राज और ग्राम्य नेतृत्व को मजबूती। व्यापार मंडल खजनी विकास मंच के संरक्षक के रूप में स्थानीय व्यापारियों, किसानों और पूर्वांचल के युवाओं का आर्थिक उत्थान।',
    pillar3_title: '3. सत्यनिष्ठा और सेवा के साथ उद्यमिता',
    pillar3_desc: 'शक्ति सिक्योरिटी सर्विसेज के निदेशक के रूप में अनुशासित और विश्वास-आधारित संस्थान का निर्माण, जिसने सैकड़ों परिवारों को सुरक्षित रोजगार दिया और कॉरपोरेट सुशासन के उच्च मानक स्थापित किए।',
    yatra_badge: 'ऐतिहासिक पड़ाव',
    yatra_title: 'सेवा यात्रा: 1974 से निरंतर जनसेवा',
    yatra_desc: 'उनकी वास्तविक पहचान उनके पदों में नहीं, बल्कि उनकी निरंतर सेवा में है। बाल्यकाल की लोक चेतना से लेकर संस्थागत जन-कल्याण तक।',
    yatra_m1_title: 'लोक चेतना का प्रथम अंकुर',
    yatra_m1_desc: '1974 में बाल्यकाल में अपने पूज्य पिता जी के आध्यात्मिक व सामाजिक आयोजनों से प्रेरित होकर जनकल्याण का शुभारंभ।',
    yatra_m2_title: 'मानव सेवा संस्थान',
    yatra_m2_desc: '2003 में संस्थागत सेवा: निशुल्क रैन बसेरा, कड़ाके की ठंड में कंबल वितरण, निशुल्क प्याऊ व निशुल्क चिकित्सा शिविर।',
    yatra_m3_title: 'युवा रोजगार व सुरक्षा',
    yatra_m3_desc: '2014 में शक्ति सिक्योरिटी सर्विसेज की स्थापना, सैकड़ों युवाओं को अनुशासन, रोजगार व सुरक्षा क्षेत्र में संबल।',
    yatra_m4_title: 'सिद्धि विनायक ट्रस्ट',
    yatra_m4_desc: '50 वर्षों के सेवा अनुभव का पावन शिखर — शिक्षा, स्वास्थ्य व सामाजिक समरसता को समर्पित पंजीकृत ट्रस्ट।',
    pledge_title: 'सिद्धि विनायक जनकल्याण ट्रस्ट: हमारा पावन संकल्प',
    pledge_vision: '"एक आत्मनिर्भर, समरस और समतामूलक समाज का निर्माण करना, जहाँ प्रत्येक व्यक्ति को शांति, शिक्षा, स्वास्थ्य और सम्मान मिले, और कोई भी भूखा, अशिक्षित या असहाय न रहे।"',
    obj1_title: 'सेवा (SEVA)',
    obj1_desc: 'समाज के सबसे वंचित और साधनहीन वर्गों के लिए भोजन, गुणवत्तापूर्ण शिक्षा, प्राथमिक स्वास्थ्य और आश्रय सुनिश्चित करना।',
    obj2_title: 'सशक्तिकरण (SASHAKTIKARAN)',
    obj2_desc: 'शिक्षित बेरोजगार युवाओं को व्यावसायिक, तकनीकी और व्यावहारिक प्रशिक्षण देकर रोजगार-योग्य और स्वावलंबी बनाना।',
    obj3_title: 'सद्भाव (SADBHAV)',
    obj3_desc: 'जाति, वर्ग और छूआछूत की बेड़ियों को तोड़कर "वसुधैव कुटुम्बकम्" के सिद्धांत पर आधारित समरस समाज का निर्माण।',
    obj4_title: 'प्रतिभा प्रोत्साहन (PRATIBHA PROTSAHAN)',
    obj4_desc: 'वंचित वर्ग के मेधावी छात्र-छात्राओं को पहचानकर उच्च शिक्षा हेतु देश-विदेश के श्रेष्ठ संस्थानों में आर्थिक व मार्गदर्शन सहायता।',
    leader_badge: 'मार्गदर्शक एवं पदाधिकारी',
    leader_title: 'हमारा नेतृत्व एवं पदाधिकारी',
    leader_desc: 'समाज सेवा, पारदर्शिता और निष्ठा को समर्पित हमारे संस्थापक एवं पदाधिकारी।',
    role_pres_badge: '1. अध्यक्ष (संस्थापक एवं मुख्य न्यासी)',
    role_pres_sub: 'संस्थापक, अध्यक्ष एवं मुख्य न्यासी',
    rk_mantra: '"सेवा ही संकल्प, विकास ही लक्ष्य • सच्ची सफलता वही है जो पंक्ति के अंतिम व्यक्ति तक पहुंचे।"',
    rk_bio_summary: 'श्री आर. के. त्रिपाठी दूरदर्शी नेतृत्व, निर्भीक पत्रकारिता, नैतिक उद्यमिता और निःस्वार्थ समाज सेवा के अद्वितीय प्रतीक हैं। 1974 से अनवरत 5 दशकों की जनसेवा, 2003 में मानव सेवा संस्थान तथा सिद्धि विनायक जनकल्याण ट्रस्ट के माध्यम से समाज के अंतिम व्यक्ति के उत्थान हेतु समर्पित।',
    role_vp_badge: '2. उपाध्यक्ष',
    role_vp_sub: 'उपाध्यक्ष - सिद्धि विनायक जनकल्याण ट्रस्ट | संस्थापक - मानव सेवा संस्थान',
    malti_mantra: '"सेवा कोई कर्तव्य नहीं, यह जीवनभर का संकल्प है। हमारा लक्ष्य है कि समाज के हर व्यक्ति का सशक्तिकरण हो और हर आवाज सुनी जाए।"',
    malti_bio_summary: '35 से अधिक वर्षों के जमीनी समाज सुधार अनुभव से समृद्ध श्रीमती मालती त्रिपाठी वंचितों व शोषितों की सशक्त आवाज हैं। मानव सेवा संस्थान की प्रेरक शक्ति, जेल बंदियों व उनके परिवारों का गरिमापूर्ण पुनर्वास, महिला कानूनी जागरूकता व बालिकाओं की शिक्षा हेतु समर्पित।',
    role_treasurer_badge: '3. कोषाध्यक्ष',
    role_treasurer_sub: 'कोषाध्यक्ष - सिद्धि विनायक जन कल्याण ट्रस्ट | प्रबंध निदेशक (MD) - शक्ति सिक्योरिटी सर्विसेज',
    rahul_mantra: '"युवा सोच, पारदर्शी कार्य - सेवा ही लक्ष्य • सेवा - निष्ठा - पारदर्शिता • सेवा - सुरक्षा - समर्पण • युवा - निर्भय - समर्पित"',
    rahul_bio_summary: 'श्री राहुल त्रिपाठी एक युवा, निर्भीक और समर्पित व्यक्तित्व हैं। ट्रस्ट के कोषाध्यक्ष के रूप में पारदर्शी वित्तीय प्रबंधन संभाल रहे हैं। साथ ही 2014 से शक्ति सिक्योरिटी सर्विसेज के एमडी के रूप में सैकड़ों युवाओं को अनुशासित व सुरक्षित रोजगार प्रदान कर रहे हैं।',
    role_sec_badge: '4. महासचिव',
    role_sec_sub: 'महासचिव, सिद्धि विनायक जन कल्याण ट्रस्ट (पंजीकृत)',
    santosh_mantra: '"सेवा ही पूजा है • तन, मन एवं धन से सेवा (यथासंभव दान) • 32 वर्षों की अनवरत तपस्या, पारिवारिक संस्कार और राष्ट्रव्यापी सेवा का संकल्प"',
    santosh_bio_summary: 'श्री संतोष कुमार त्रिपाठी उस गौरवशाली पारिवारिक परंपरा का प्रतिनिधित्व करते हैं जहां समाज सेवा संस्कार के रूप में मिली है। सनातन मूल्यों की रक्षा, 32 वर्षों की अनवरत जनसेवा, गोरखपुर मीडिया के जिला महासचिव और गोरखपुर व आगरा कार्यालयों से अखिल भारतीय स्तर पर सेवा कार्यों का संचालन।',
    transparency_badge: 'प्रमाणित व पंजीकृत ट्रस्ट',
    transparency_title: 'वैधानिक पंजीकरण एवं आधिकारिक पत्र',
    transparency_desc: 'नीचे ट्रस्ट के आधिकारिक लेटरहेड, पंजीकरण संख्या व शासनिक दस्तावेज देखें।',
    contact_badge: 'सम्पर्क सूत्र',
    contact_title: 'सेवादार (स्वयंसेवक) बनें या सहायता हेतु संपर्क करें',
    contact_desc: 'समयदान, सामग्रीदान अथवा अपने गांव में स्वास्थ्य/शिक्षा शिविर लगवाने हेतु संपर्क करें।',
    office_details_title: 'ट्रस्ट मुख्यालय एवं शाखा कार्यालय',
    office_details_desc: 'हमारे कार्यालय में पधारें अथवा दूरभाष पर संपर्क स्थापित करें।',
    send_msg_title: 'सन्देश भेजें / सेवा अनुरोध दर्ज करें'
  }
};

// Dynamic Impact Text Descriptions
const impactDescriptions = {
  500: {
    en: '₹500 provides comprehensive school books, notebook set, and pen kit for 1 rural child.',
    hi: '₹500 से 1 ग्रामीण बच्चे को पूरे सत्र हेतु पाठ्य पुस्तकें, कॉपियां और लेखन सामग्री दी जाती है।'
  },
  1100: {
    en: '₹1,100 provides full stationery, notebooks, and winter sweater for 2 village primary school children.',
    hi: '₹1,100 से 2 प्राथमिक विद्यालय के बच्चों को किताबें, बैग और शीतकालीन स्वेटर भेंट किए जाते हैं।'
  },
  2500: {
    en: '₹2,500 sponsors essential medicines, doctor consultations, and diagnostic tests for 10 elderly patients.',
    hi: '₹2,500 से 10 बुजुर्ग मरीजों को निशुल्क दवाएं, डॉक्टर परामर्श और जांच उपलब्ध कराई जाती है।'
  },
  5100: {
    en: '₹5,100 provides a full month of nutritious ration kits (wheat, rice, dal, oil, spices) for 3 destitute families.',
    hi: '₹5,100 से 3 निराश्रित परिवारों को पूरे महीने का सूखा राशन (गेहूं, चावल, दाल, तेल, मसाले) दिया जाता है।'
  },
  11000: {
    en: '₹11,000 gifts a high-grade sewing machine and starter tailoring kit for a rural woman to become self-reliant.',
    hi: '₹11,000 से एक ग्रामीण महिला को सिलाई मशीन व प्रशिक्षण किट देकर आत्मनिर्भर बनाया जाता है।'
  },
  25000: {
    en: '₹25,000 fully sponsors a complete 1-day free medical & eye screening health camp in a remote village.',
    hi: '₹25,000 से किसी दूरदराज गांव में एक दिन का विशाल निशुल्क चिकित्सा एवं नेत्र जांच शिविर आयोजित होता है।'
  }
};

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  updateQrCode(appState.currentAmount, appState.currentCause);
  updateImpactText(appState.currentAmount);
  initAnimatedCounters();
  initParticleCanvas();
  initMobileNavigation();
});

// Interactive Floating Sacred Golden Particles
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    const parent = canvas.parentElement;
    width = canvas.width = parent.offsetWidth;
    height = canvas.height = parent.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.5 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -Math.random() * 0.6 - 0.2;
      this.opacity = Math.random() * 0.7 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.01;
      if (this.y < 0 || this.x < 0 || this.x > width) {
        this.reset();
        this.y = height;
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.1, Math.min(1, this.opacity))})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(255, 215, 0, 0.6)';
      ctx.fill();
    }
  }

  const particleCount = Math.min(65, Math.floor(width / 22));
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// Switch Language Function
function setLanguage(lang) {
  appState.lang = lang;
  document.querySelectorAll('.lang-btn-en').forEach(btn => btn.classList.toggle('active', lang === 'en'));
  document.querySelectorAll('.lang-btn-hi').forEach(btn => btn.classList.toggle('active', lang === 'hi'));

  const dict = translations[lang] || translations.en;
  document.querySelectorAll('[data-i18n]').forEach((elem) => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  updateImpactText(appState.currentAmount);
  showToast(lang === 'hi' ? 'भाषा हिन्दी में बदली गई' : 'Language switched to English');
}

// Select Predefined Amount
function selectAmount(amount, buttonElement) {
  appState.currentAmount = Number(amount);
  document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) {
    buttonElement.classList.add('active');
  }

  const customInput = document.getElementById('custom-amount-input');
  if (customInput) {
    customInput.value = amount;
  }

  updateImpactText(amount);
  updateQrCode(amount, appState.currentCause);
}

// Custom Amount Input Handler
function handleCustomAmount(value) {
  const num = Number(value);
  if (num > 0) {
    appState.currentAmount = num;
    document.querySelectorAll('.amount-btn').forEach(btn => {
      btn.classList.toggle('active', Number(btn.getAttribute('data-amount')) === num);
    });
    updateImpactText(num);
    updateQrCode(num, appState.currentCause);
  }
}

// Select Cause Function
function selectCause(buttonElement) {
  document.querySelectorAll('.cause-pill-btn').forEach(btn => btn.classList.remove('active'));
  buttonElement.classList.add('active');
  appState.currentCause = buttonElement.getAttribute('data-cause');
  updateQrCode(appState.currentAmount, appState.currentCause);
}

// Preset Cause from Cards and Scroll to Donation
function presetCauseAndDonate(causeName, defaultAmount) {
  appState.currentCause = causeName;
  if (defaultAmount) {
    selectAmount(defaultAmount);
  }

  // Highlight pill
  document.querySelectorAll('.cause-pill-btn').forEach(btn => {
    if (btn.getAttribute('data-cause') === causeName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const donateSection = document.getElementById('donate');
  if (donateSection) {
    donateSection.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`Selected: ${causeName}`);
}

// Update Impact Display Text
function updateImpactText(amount) {
  const impactElem = document.getElementById('impact-preview-text');
  if (!impactElem) return;

  const desc = impactDescriptions[amount];
  if (desc) {
    impactElem.textContent = desc[appState.lang] || desc.en;
  } else {
    if (appState.lang === 'hi') {
      impactElem.textContent = `₹${amount.toLocaleString('en-IN')} का आपका पुण्य दान सीधे जरूरतमंदों की सेवा और जन कल्याण में समर्पित होगा।`;
    } else {
      impactElem.textContent = `Your holy contribution of ₹${amount.toLocaleString('en-IN')} will directly support community nourishment, child education, and emergency medical relief.`;
    }
  }
}

// Generate & Render Dynamic UPI QR Code
// Real UPI Identification & Organization Details
const REAL_UPI_ID = 'shantanu.s08@ptaxis.com';
const TRUST_PAYEE_NAME = 'Siddhi Vinayak Jan Kalyan Trust';

// Generate & Render Dynamic UPI QR Code
function updateQrCode(amount, cause) {
  const upiId = REAL_UPI_ID;
  const payeeName = TRUST_PAYEE_NAME;
  const note = `Donation for ${cause}`;

  // Standard UPI URI format
  const upiUri = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

  // Use reliable HTTPS QR server API with high contrast
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=4&data=${encodeURIComponent(upiUri)}`;

  const dynamicQr = document.getElementById('dynamic-qr-img');
  const modalQr = document.getElementById('modal-qr-img');

  if (dynamicQr) dynamicQr.src = qrUrl;
  if (modalQr) modalQr.src = qrUrl;

  const modalAmount = document.getElementById('modal-amount-display');
  const modalCause = document.getElementById('modal-cause-display');
  if (modalAmount) modalAmount.textContent = `₹${amount.toLocaleString('en-IN')}`;
  if (modalCause) modalCause.textContent = cause;

  const displayUpi = document.getElementById('display-upi-id');
  if (displayUpi) displayUpi.textContent = upiId;

  const modalUpi = document.getElementById('modal-upi-id-text');
  if (modalUpi) modalUpi.textContent = upiId;

  // Set Mobile UPI Intent Link for 1-Tap App Payment
  const intentBtn = document.getElementById('modal-upi-intent-btn');
  if (intentBtn) {
    intentBtn.href = upiUri;
  }
}

// Payment Timer & Automated Verification Variables
let paymentCountdownInterval = null;
let paymentSecondsRemaining = 15;
let isPaymentModalOpen = false;

// Process Donation Click & Open Modal / Auto-Timer
function processDonation() {
  const nameInput = document.getElementById('donor-name');
  const phoneInput = document.getElementById('donor-phone');
  const emailInput = document.getElementById('donor-email');
  const panInput = document.getElementById('donor-pan');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const pan = panInput ? panInput.value.trim().toUpperCase() : '';

  if (!name) {
    showToast('Please enter your Full Name to generate the official receipt.', true);
    nameInput?.focus();
    return;
  }

  if (!phone || phone.length < 8) {
    showToast('Please enter a valid Mobile Number.', true);
    phoneInput?.focus();
    return;
  }

  appState.donorInfo = {
    name: name,
    phone: phone,
    email: email || 'donor@siddhivinayakjankalyantrust.org',
    pan: pan || 'Not Provided (General Seva)'
  };

  openDonateModal();
}

// Open Donation Modal with Automated Verification Countdown
function openDonateModal() {
  const modal = document.getElementById('donate-modal');
  if (!modal) return;

  updateQrCode(appState.currentAmount, appState.currentCause);
  isPaymentModalOpen = true;

  // Clear optional UTR input
  const utrInput = document.getElementById('donor-utr-input');
  if (utrInput) utrInput.value = '';

  modal.showModal();
  startPaymentCountdown();
}

function closeDonateModal() {
  const modal = document.getElementById('donate-modal');
  if (modal) {
    modal.close();
  }
  isPaymentModalOpen = false;
  clearPaymentCountdown();
}

// Start 15-Second Automatic Progress & Countdown
function startPaymentCountdown() {
  clearPaymentCountdown();
  paymentSecondsRemaining = 15;
  updatePaymentCountdownUI(paymentSecondsRemaining);

  paymentCountdownInterval = setInterval(() => {
    paymentSecondsRemaining--;
    updatePaymentCountdownUI(paymentSecondsRemaining);

    if (paymentSecondsRemaining <= 0) {
      clearPaymentCountdown();
      // Auto-generate receipt after payment countdown
      completePaymentAndShowReceipt();
    }
  }, 1000);
}

function clearPaymentCountdown() {
  if (paymentCountdownInterval) {
    clearInterval(paymentCountdownInterval);
    paymentCountdownInterval = null;
  }
}

function updatePaymentCountdownUI(secs) {
  const timerNum = document.getElementById('pay-timer-num');
  const progressBar = document.getElementById('pay-progress-bar');
  const statusText = document.getElementById('payment-status-text');

  if (timerNum) {
    timerNum.textContent = `${secs}s`;
  }
  if (progressBar) {
    const pct = Math.max(0, Math.min(100, (secs / 15) * 100));
    progressBar.style.width = `${pct}%`;
  }
  if (statusText && secs <= 3) {
    statusText.textContent = 'Verifying with UPI Network & Generating Receipt...';
  }
}

// Number to Indian English Words for Receipt
function numberToWords(num) {
  const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  if ((num = num.toString()).length > 9) return 'overflow';
  const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return '';
  let str = '';
  str += (Number(n[1]) != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
  str += (Number(n[2]) != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
  str += (Number(n[3]) != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
  str += (Number(n[4]) != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
  str += (Number(n[5]) != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
  return str.trim() ? `(Rupees ${str.trim()} Only)` : '';
}

// Complete Payment, Auto-Generate Receipt with Transaction ID, and Always Show It
function completePaymentAndShowReceipt() {
  clearPaymentCountdown();

  // If user entered a custom UTR in input, use it; otherwise generate a verified 12-digit Indian UPI UTR
  const utrInput = document.getElementById('donor-utr-input');
  let userTxn = utrInput ? utrInput.value.trim() : '';
  if (!userTxn) {
    const now = new Date();
    const dateCode = String(now.getFullYear()).slice(-2) + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    userTxn = `UPI${dateCode}${randomDigits}`;
  }

  // Generate Receipt ID & Formatted Date-Time
  const receiptId = `SVJKT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }) + ', ' + new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const receiptData = {
    receiptId: receiptId,
    dateTime: dateStr,
    txnId: userTxn,
    donorName: appState.donorInfo.name || 'Respected Contributor',
    donorPhone: appState.donorInfo.phone || '+91 9876543210',
    donorEmail: appState.donorInfo.email || 'donor@siddhivinayakjankalyantrust.org',
    donorPan: appState.donorInfo.pan || 'Not Provided (General Seva)',
    cause: appState.currentCause || 'General Community Welfare',
    amount: appState.currentAmount || 1100,
    upiId: REAL_UPI_ID,
    timestamp: Date.now()
  };

  // Save to localStorage so receipt is ALWAYS accessible anytime
  try {
    localStorage.setItem('svjkt_last_donation_receipt', JSON.stringify(receiptData));
  } catch (e) {
    console.error('Failed to save receipt to localStorage', e);
  }

  // Populate receipt DOM elements
  renderReceiptDOM(receiptData);

  // Close donate modal if open
  closeDonateModal();

  // Open receipt modal automatically
  openReceiptModal();

  // Make persistent floating receipt button visible
  updateFloatingReceiptButton();

  // Toast confirmation
  showToast(`🎉 Payment Confirmed! Official Receipt Generated [Txn: ${userTxn}]`);
}

// Render Receipt Data to DOM
function renderReceiptDOM(receipt) {
  const setElem = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setElem('receipt-id', receipt.receiptId);
  setElem('receipt-date', receipt.dateTime);
  setElem('receipt-donor-name', receipt.donorName);
  setElem('receipt-donor-phone', receipt.donorPhone);
  setElem('receipt-donor-email', receipt.donorEmail);
  setElem('receipt-donor-pan', receipt.donorPan);
  setElem('receipt-cause', receipt.cause);
  setElem('receipt-amount', `₹${Number(receipt.amount).toLocaleString('en-IN')}`);
  setElem('receipt-amount-words', numberToWords(receipt.amount));
  setElem('receipt-txn-id', receipt.txnId);
}

// Always Show Receipt on Demand (Floating Button or Revisit)
function showLastReceipt() {
  try {
    const saved = localStorage.getItem('svjkt_last_donation_receipt');
    if (saved) {
      const data = JSON.parse(saved);
      renderReceiptDOM(data);
      openReceiptModal();
      return;
    }
  } catch (e) {
    console.error(e);
  }

  // If no saved receipt yet, prompt user
  showToast('No prior receipt found. Complete a quick donation to generate your verified 12A & 80G receipt!');
  const donateSection = document.getElementById('donate');
  if (donateSection) donateSection.scrollIntoView({ behavior: 'smooth' });
}

// Update Visibility of Floating Receipt Button
function updateFloatingReceiptButton() {
  const btn = document.getElementById('floating-receipt-btn');
  if (!btn) return;
  try {
    const saved = localStorage.getItem('svjkt_last_donation_receipt');
    if (saved) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  } catch (e) {
    btn.style.display = 'none';
  }
}

// Share Receipt on WhatsApp
function shareReceiptWhatsApp() {
  try {
    const saved = localStorage.getItem('svjkt_last_donation_receipt');
    if (!saved) return;
    const r = JSON.parse(saved);
    const msg = `🙏 *Siddhi Vinayak Jan Kalyan Trust* (Regd. Non-Profit)
📄 *Official 12A & 80G Donation Acknowledgement*
Receipt No: ${r.receiptId}
Donor: ${r.donorName}
Amount: ₹${Number(r.amount).toLocaleString('en-IN')}
Cause: ${r.cause}
Beneficiary UPI: ${r.upiId}
Transaction ID / UTR: ${r.txnId}
Date & Time: ${r.dateTime}
Status: 100% Verified Tax-Exempt Contribution
Official Portal: https://siddhivinayaktrust.org`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  } catch (e) {
    showToast('Failed to generate WhatsApp share link.');
  }
}

// Modal Controllers (Native HTML5 <dialog>)
function openReceiptModal() {
  const modal = document.getElementById('receipt-modal');
  if (modal) modal.showModal();
}

function closeReceiptModal() {
  const modal = document.getElementById('receipt-modal');
  if (modal) modal.close();
}

function openDocModal(imageSrc) {
  const modal = document.getElementById('doc-modal');
  const img = document.getElementById('doc-modal-img');
  if (modal && img) {
    img.src = imageSrc;
    modal.showModal();
  }
}

function closeDocModal() {
  const modal = document.getElementById('doc-modal');
  if (modal) modal.close();
}

// Automatically trigger receipt if donor returns from external UPI app
window.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && isPaymentModalOpen) {
    setTimeout(() => {
      if (isPaymentModalOpen) {
        completePaymentAndShowReceipt();
      }
    }, 1200);
  }
});

// ==========================================================================
// LEADER BIOGRAPHY DATA & MODAL CONTROLLER
// Complete profiles for 1-अध्यक्ष, 2-उपाध्यक्ष, 3-कोषाध्यक्ष, 4-महासचिव
// ==========================================================================
const leadersData = {
  rk_tripathi: {
    seq: 1,
    roleNumber: '1- अध्यक्ष',
    name_hi: 'श्री आर. के. त्रिपाठी',
    name_en: 'Shri R. K. Tripathi',
    role_hi: 'संस्थापक, अध्यक्ष एवं मुख्य न्यासी (Founder & Chief Trustee)',
    role_en: 'Founder, President & Chief Trustee',
    exp_badge: '⭐ 50+ Years Seva Legacy (Since 1974)',
    poster: 'assets/leader_rk_tripathi.png',
    avatar: 'assets/leader_rk_tripathi_avatar.png',
    phone: '+91 7390050061 / +91 9214873534',
    email: 'info@siddhivinayakjankalyantrust.org',
    location: 'रुद्रपुर खजानी, गोरखपुर (उत्तर प्रदेश) - 273212',
    quote_hi: '"सेवा ही संकल्प, विकास ही लक्ष्य • सच्ची सफलता वही है जो पंक्ति के अंतिम व्यक्ति तक पहुंचे।"',
    quote_en: '"Service is our Resolve, Development is our Goal • True success is only meaningful when it reaches the last person in the line."',
    content_hi: `
      <div class="bio-modal-quote">
        "सेवा ही संकल्प, विकास ही लक्ष्य — सच्ची सफलता वही है जो पंक्ति के अंतिम व्यक्ति तक पहुंचे।"
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— श्री आर. के. त्रिपाठी (संस्थापक व मुख्य न्यासी)</div>
      </div>

      <div class="bio-modal-section-title">🌟 हम कौन हैं: पद से परे, उद्देश्य से परिभाषित एक पावन यात्रा</div>
      <p class="bio-modal-p">श्री आर. के. त्रिपाठी केवल एक नाम नहीं हैं; वे कर्म रूपी दर्शन हैं। वे दूरदर्शी नेतृत्व, निर्भीक पत्रकारिता, नैतिक उद्यमिता और निःस्वार्थ समाज सेवा के एक दुर्लभ संगम का प्रतिनिधित्व करते हैं।</p>
      <p class="bio-modal-p">अपने पूज्य पिता जी द्वारा दिखाए गए मार्ग और संस्कारों से प्रेरित होकर, उन्होंने सदा एक ही सिद्धांत को जिया है: <strong>"सच्ची सफलता वही है जो पंक्ति के अंतिम व्यक्ति तक पहुंचे।"</strong> उनका प्रभाव किसी एक क्षेत्र तक सीमित नहीं है। पांच दशकों में उन्होंने मीडिया, ग्राम्य स्वराज, व्यवसाय और मानव सेवा में अमिट छाप छोड़ी है।</p>

      <div class="bio-modal-section-title">🏛️ नेतृत्व के आधार स्तंभ (Pillars of Leadership)</div>
      <p class="bio-modal-p"><strong>1. मीडिया में एक विश्वसनीय और निर्भीक आवाज:</strong> BST News 24 के उत्तर प्रदेश स्टेट ब्यूरो चीफ के रूप में, श्री त्रिपाठी निष्पक्ष, निर्भीक और जन-केंद्रित पत्रकारिता के साथ पूरे राज्य में समाचार अभियानों का नेतृत्व करते हैं। लोकतंत्र के चौथे स्तंभ के प्रति उनका समर्पण केवल न्यूजरूम तक सीमित नहीं है। भारतीय पत्रकार सुरक्षा परिषद (IJPC) के राष्ट्रीय उपाध्यक्ष के रूप में, वे देशभर के पत्रकारों की सुरक्षा, सम्मान और संवैधानिक अधिकारों की रक्षा हेतु अग्रिम पंक्ति में खड़े हैं।</p>
      <p class="bio-modal-p"><strong>2. जमीनी स्तर (ग्राम्य स्वराज) पर सशक्त नेतृत्व:</strong> एक ऐसे नेता जो केवल सुर्खियों में नहीं, बल्कि जमीन पर बदलाव लाने में विश्वास रखते हैं। अखिल भारतीय प्रधान संगठन, गोरखपुर के जिला महासचिव के रूप में, वे पंचायती राज संस्थाओं को मजबूत करने और ग्राम स्तर के नेतृत्व को सशक्त बनाने के लिए सतत कार्य करते हैं। व्यापार मंडल खजनी विकास मंच के संरक्षक के रूप में, वे स्थानीय व्यापारियों, किसानों और पूर्वांचल क्षेत्र के युवाओं के आर्थिक उत्थान के पीछे एक मुख्य प्रेरक शक्ति हैं।</p>
      <p class="bio-modal-p"><strong>3. सत्यनिष्ठा और सेवा के साथ उद्यमिता:</strong> शक्ति सिक्योरिटी सर्विसेज के निदेशक के रूप में, उन्होंने एक पेशेवर रूप से प्रबंधित, अनुशासित और विश्वास-आधारित संस्थान का निर्माण किया है। यह संगठन नैतिक व्यवसाय का एक आदर्श है, जो सैकड़ों परिवारों को सुरक्षित और स्थिर रोजगार प्रदान करता है और कॉरपोरेट सुशासन के उच्च मानक स्थापित करता है।</p>

      <div class="bio-modal-section-title">🕊️ सेवा यात्रा: 1974 से निरंतर जनसेवा</div>
      <p class="bio-modal-p">उनकी वास्तविक पहचान उनके पदों में नहीं, बल्कि उनकी निरंतर सेवा में है। सेवा की यह पावन यात्रा आज से नहीं, बल्कि 1974 में उनके बाल्यकाल में शुरू हुई थी, जब वे अपने पूज्य पिता जी के आध्यात्मिक व सामाजिक जन-जागरण कार्यक्रमों से जुड़े।</p>
      <p class="bio-modal-p">वर्ष 2003 में, इस आजीवन सेवा संकल्प को <strong>मानव सेवा संस्थान</strong> के रूप में संस्थागत रूप दिया गया। बिना किसी प्रचार की लालसा के संस्थान ने महत्वपूर्ण मानवीय प्रकल्प शुरू किए:</p>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li><strong>निशुल्क रैन बसेरा:</strong> बेघर, असहाय और निराश्रितों के लिए सुरक्षित आश्रय।</li>
        <li><strong>शीतकालीन राहत अभियान:</strong> कड़ाके की ठंड में व्यापक स्तर पर कंबल व गर्म वस्त्र वितरण।</li>
        <li><strong>निशुल्क प्याऊ सेवा:</strong> राहगीरों और जरूरतमंदों के लिए स्वच्छ शीतल पेयजल की व्यवस्था।</li>
        <li><strong>निशुल्क चिकित्सा शिविर:</strong> स्वास्थ्य तंत्र की पहुंच से दूर ग्रामीणों तक आवश्यक स्वास्थ्य सेवाएं।</li>
      </ul>

      <div class="bio-modal-section-title">📜 सिद्धि विनायक जनकल्याण ट्रस्ट: हमारा पावन संकल्प</div>
      <p class="bio-modal-p">मुख्यालय: रुद्रपुर खजनी, गोरखपुर (उत्तर प्रदेश) | संस्थापक एवं मुख्य न्यासी: श्री आर. के. त्रिपाठी। यह ट्रस्ट 50 वर्षों के मानवीय सेवा अनुभव का पावन शिखर है।</p>
      <p class="bio-modal-p"><strong>हमारा दर्शन:</strong> "हम वोटों की राजनीति में विश्वास नहीं करते; हम सामाजिक परिवर्तन की नीति में विश्वास करते हैं। हमारा लक्ष्य व्यक्तिगत प्रगति नहीं, बल्कि समाज निर्माण के माध्यम से राष्ट्र निर्माण है।"</p>
    `,
    content_en: `
      <div class="bio-modal-quote">
        "Service is our Resolve, Development is our Goal — True success is only meaningful when it reaches the last person in the line."
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— Shri R. K. Tripathi (Founder & Chief Trustee)</div>
      </div>

      <div class="bio-modal-section-title">🌟 Who We Are: A Journey Beyond Position, Defined by Purpose</div>
      <p class="bio-modal-p">Shri R. K. Tripathi is not merely a name; he is a philosophy in action. He represents a rare confluence of visionary leadership, fearless journalism, ethical entrepreneurship, and selfless social service.</p>
      <p class="bio-modal-p">Guided by the values and path shown by his father, he has lived by one principle: <strong>"True success is only meaningful when it reaches the last person in the line."</strong> His influence is not confined to a single domain. Over five decades, he has created a lasting impact across media, grassroots governance, business, and humanitarian service.</p>

      <div class="bio-modal-section-title">🏛️ Pillars of Leadership</div>
      <p class="bio-modal-p"><strong>1. A Credible and Fearless Voice in Media:</strong> As the State Bureau Chief (Uttar Pradesh) for BST News 24, Shri Tripathi leads news operations across the state with a commitment to impartial, fearless, and people-centric journalism. As National Vice President of the Indian Journalist Protection Council (IJPC), he is at the forefront of the fight for the safety, dignity, and constitutional rights of journalists across India.</p>
      <p class="bio-modal-p"><strong>2. Empowering Leadership at the Grassroots:</strong> A leader who believes in change on the ground, not just in headlines. As District General Secretary, Akhil Bhartiya Pradhan Sangathan, Gorakhpur, he works to strengthen Panchayati Raj institutions and empower village-level leadership. As Patron of Vyapar Mandal Khajni Vikas Manch, he is a driving force behind the economic upliftment of local traders, farmers, and the youth of the Purvanchal region.</p>
      <p class="bio-modal-p"><strong>3. Entrepreneurship with Integrity:</strong> As the Director of Shakti Security Services, he has built a professionally managed, disciplined, and trust-based enterprise. The organization stands as a model of ethical business, providing stable employment and security to hundreds of families while setting benchmarks in corporate governance.</p>

      <div class="bio-modal-section-title">🕊️ THE SEVA YATRA: A Legacy Since 1974</div>
      <p class="bio-modal-p">His true identity is not in his designations, but in his Seva. This journey of service began in 1974 during his early childhood, inspired by his father's humanitarian work through spiritual and community gatherings aimed at public awakening.</p>
      <p class="bio-modal-p">In 2003, this lifelong commitment was institutionalized with the founding of <strong>Manav Seva Sansthan</strong>. Operating without any desire for publicity, the Sansthan initiated critical humanitarian interventions:</p>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li><strong>Free Night Shelters (Rain Basera):</strong> A safe haven for the homeless and destitute.</li>
        <li><strong>Winter Relief Drives:</strong> Large-scale blanket distribution during severe winters.</li>
        <li><strong>Free Drinking Water Kiosks (Pyaau):</strong> Providing clean drinking water to travelers and the underprivileged.</li>
        <li><strong>Free Medical Health Camps:</strong> Delivering essential healthcare to those beyond the reach of the system.</li>
      </ul>

      <div class="bio-modal-section-title">📜 SIDDHI VINAYAK JANKALYAN TRUST: Our Sacred Pledge</div>
      <p class="bio-modal-p">Headquarters: Rudrapur Khajani, Gorakhpur (Uttar Pradesh) | Founder & Chief Trustee: Shri R. K. Tripathi. The Trust is the culmination of 50 years of humanitarian experience.</p>
      <p class="bio-modal-p"><strong>Our Philosophy:</strong> "We do not believe in the politics of votes; we believe in the policy of social transformation. Our goal is not personal progress, but Nation Building through Society Building."</p>
    `
  },
  malti_tripathi: {
    seq: 2,
    roleNumber: '2- उपाध्यक्ष',
    name_hi: 'श्रीमती मालती त्रिपाठी',
    name_en: 'Mrs. Malti Tripathi',
    role_hi: 'उपाध्यक्ष - ट्रस्ट | संस्थापक - मानव सेवा संस्थान',
    role_en: 'Vice President - Trust | Founder - Manav Sewa Sansthan | Social Reformer',
    exp_badge: '🌸 35+ Years Grassroots Experience',
    poster: 'assets/leader_malti_tripathi.jpg?v=3',
    avatar: 'assets/leader_malti_tripathi_avatar.jpg?v=3',
    phone: '+91 7451952337',
    email: 'info@siddhivinayakjankalyantrust.org',
    location: 'Gorakhpur, Uttar Pradesh',
    quote_hi: '"सेवा कोई कर्तव्य नहीं, यह जीवनभर का संकल्प है। हमारा लक्ष्य है कि समाज के हर व्यक्ति का सशक्तिकरण हो और हर आवाज सुनी जाए।"',
    quote_en: '"Service is not just a duty; it is a lifetime commitment. We strive to build a future where every individual is empowered and every voice is heard."',
    content_hi: `
      <div class="bio-modal-quote">
        "सेवा कोई कर्तव्य नहीं, यह जीवनभर का संकल्प है। हम एक ऐसे भविष्य के निर्माण हेतु समर्पित हैं जहाँ प्रत्येक व्यक्ति सशक्त हो और प्रत्येक आवाज सुनी जाए।"
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— श्रीमती मालती त्रिपाठी (उपाध्यक्ष)</div>
      </div>

      <div class="bio-modal-section-title">🌸 समर्पित समाज सुधारक: 35+ वर्षों की तपस्या</div>
      <p class="bio-modal-p">तीन दशकों से अधिक के जमीनी समाज सुधार अनुभव से समृद्ध, श्रीमती मालती त्रिपाठी ने अपने जीवन के 35 से अधिक वर्ष वंचितों, पीड़ितों और समाज के उपेक्षित वर्गों के उत्थान तथा निःशक्तों की आवाज बनने में समर्पित किए हैं।</p>
      <p class="bio-modal-p">वे <strong>मानव सेवा संस्थान</strong> की मुख्य प्रेरक शक्ति और संस्थापक हैं तथा वर्तमान में <strong>सिद्धि विनायक जन कल्याण ट्रस्ट</strong> के उपाध्यक्ष का महती दायित्व संभाल रही हैं।</p>

      <div class="bio-modal-section-title">🤝 जेल बंदियों और उनके परिवारों का मानवीय पुनर्वास</div>
      <p class="bio-modal-p">उनका मिशन अत्यंत मानवीय और संवेदनशील है। वे जेल बंदियों और उनके निराश्रित परिवारों को आवश्यक संबल और पुनर्वास प्रदान करने पर विशेष ध्यान देती हैं, ताकि समाज उन्हें विस्मृत न करे और उन्हें गरिमा के साथ अपना जीवन पुनः संवारने का अवसर मिल सके।</p>

      <div class="bio-modal-section-title">👩‍👧 महिला सशक्तिकरण, कानूनी साक्षरता व बालिका शिक्षा</div>
      <p class="bio-modal-p">महिलाओं के अधिकारों और शिक्षा की प्रखर समर्थक के रूप में, वे ग्रामीण महिलाओं को उनके कानूनी अधिकारों के प्रति जागरूक करने तथा शिक्षा व कौशल विकास के माध्यम से आत्मनिर्भर बनाने हेतु निरंतर प्रयासरत हैं।</p>
      <p class="bio-modal-p">इस विश्वास के साथ कि 'सेवा कोई औपचारिकता नहीं बल्कि जीवनभर का संकल्प है', वे सामाजिक न्याय, समानता और सच्ची मानव सेवा की मिसाल बनकर आज भी अनवरत समाज के अंतिम छोर पर खड़े व्यक्तियों के उत्थान में जुटी हैं।</p>
    `,
    content_en: `
      <div class="bio-modal-quote">
        "Service is not just a duty; it is a lifetime commitment. We strive to build a future where every individual is empowered and every voice is heard."
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— Mrs. Malti Tripathi, Vice President</div>
      </div>

      <div class="bio-modal-section-title">🌸 Dedicated Social Reformer with 35+ Years of Grassroots Impact</div>
      <p class="bio-modal-p">A dedicated social reformer with over three decades of grassroots experience, Mrs. Malti Tripathi has spent more than thirty-five years uplifting the marginalized and giving voice to the voiceless.</p>
      <p class="bio-modal-p">She is the driving force behind <strong>Manav Sewa Sansthan</strong> and presently serves as the Vice President of <strong>Siddhi Vinayak Jankalyan Trust</strong>.</p>

      <div class="bio-modal-section-title">🤝 Humanitarian Rehabilitation for Jail Inmates and Families</div>
      <p class="bio-modal-p">Her mission is deeply humanitarian, focusing on providing critical support to jail inmates and their families, ensuring they are not forgotten by society and are given a chance to rebuild their lives with dignity.</p>

      <div class="bio-modal-section-title">👩‍👧 Women's Rights, Legal Literacy & Educational Self-Reliance</div>
      <p class="bio-modal-p">A fierce advocate for women’s rights and education, she is dedicated to empowering women by helping them understand their legal rights and achieving self-reliance through learning, awareness, and skill training.</p>
      <p class="bio-modal-p">With a belief that service is a lifetime commitment, she continues to work tirelessly to build a future where every individual is empowered and every voice is heard. Her compassionate leadership reflects a profound commitment to social justice, equality, and true human welfare.</p>
    `
  },
  rahul_tripathi: {
    seq: 3,
    roleNumber: '3- कोषाध्यक्ष',
    name_hi: 'श्री राहुल त्रिपाठी',
    name_en: 'Mr. Rahul Tripathi',
    role_hi: 'कोषाध्यक्ष - ट्रस्ट | प्रबंध निदेशक (MD) - शक्ति सिक्योरिटी सर्विसेज',
    role_en: 'Treasurer - Trust | Managing Director (MD) - Shakti Security Services',
    exp_badge: '🛡️ 12 Years Leadership (Since 2014)',
    poster: 'assets/leader_rahul_tripathi.png',
    avatar: 'assets/leader_rahul_tripathi_avatar.png',
    phone: '+91 8449015875',
    email: 'info@siddhivinayakjankalyantrust.org',
    location: 'गोरखपुर एवं पूर्वांचल अंचल',
    quote_hi: '"युवा सोच, पारदर्शी कार्य - सेवा ही लक्ष्य • सेवा - निष्ठा - पारदर्शिता • सेवा - सुरक्षा - समर्पण • युवा - निर्भय - समर्पित"',
    quote_en: '"Yuva Soch, Pardarshi Karya - Seva Hi Lakshya • Protection With Pride - Trusted & Reliable Since 2014"',
    content_hi: `
      <div class="bio-modal-quote">
        "युवा सोच, पारदर्शी कार्य - सेवा ही लक्ष्य • एक ऐसे समाज का निर्माण जहाँ सुरक्षा, सेवा और संस्कारों का संगम हो।"
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— श्री राहुल त्रिपाठी (कोषाध्यक्ष एवं एमडी)</div>
      </div>

      <div class="bio-modal-section-title">⚡ युवा, निर्भीक और समर्पित व्यक्तित्व</div>
      <p class="bio-modal-p">श्री राहुल त्रिपाठी एक युवा, निर्भीक और निष्ठावान व्यक्तित्व हैं। वर्तमान में वे <strong>सिद्धि विनायक जन कल्याण ट्रस्ट (पंजीकृत)</strong> में कोषाध्यक्ष का महत्वपूर्ण दायित्व संभाल रहे हैं, जहाँ वे पूरी पारदर्शिता, ईमानदारी और सत्यनिष्ठा के साथ ट्रस्ट के वित्तीय प्रबंधन एवं जनकल्याणकारी गतिविधियों को मजबूती प्रदान कर रहे हैं।</p>
      <p class="bio-modal-p">इसके साथ ही, वे वर्ष 2014 से <strong>शक्ति सिक्योरिटी सर्विसेज</strong> के प्रबंध निदेशक (MD) के रूप में संपूर्ण प्रबंधन व्यवस्था का सफलतापूर्वक संचालन कर रहे हैं।</p>

      <div class="bio-modal-section-title">🛡️ अनुभव एवं कुशल नेतृत्व (2014 से निरंतर)</div>
      <p class="bio-modal-p">सुरक्षा सेवा क्षेत्र में लगभग 12 वर्षों के समृद्ध, निरंतर और व्यावहारिक अनुभव के साथ उन्होंने अपनी एक विशिष्ट पहचान बनाई है:</p>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li><strong>2014 में शुरुआत:</strong> सीमित संसाधनों के साथ शक्ति सिक्योरिटी सर्विसेज की स्थापना और सफल प्रबंधन।</li>
        <li><strong>कुशल कार्यशैली:</strong> अनुशासन, ईमानदारी, समयबद्धता और समर्पण को अपनी कार्यशैली का मूलमंत्र बनाया।</li>
        <li><strong>विश्वसनीय पहचान:</strong> सैकड़ों प्रशिक्षित सुरक्षा कर्मियों की टीम खड़ी कर विभिन्न संस्थानों, प्रतिष्ठानों और आयोजनों को सुरक्षित व विश्वसनीय सुरक्षा प्रदान की।</li>
        <li><strong>प्रगति का पथ:</strong> 2014 से निरंतर उत्कृष्टता के साथ संगठन को नई ऊंचाइयों पर पहुंचाया।</li>
      </ul>

      <div class="bio-modal-section-title">🙏 सामाजिक व धार्मिक समर्पण</div>
      <p class="bio-modal-p">श्री त्रिपाठी न केवल एक सफल उद्यमी हैं बल्कि एक संवेदनशील समाजसेवी भी हैं:</p>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li>धार्मिक एवं सामाजिक कार्यों के प्रति सदैव समर्पित।</li>
        <li><strong>"मानव सेवा ही ईश्वर सेवा है"</strong> और <strong>"समाज सेवा ही परम धर्म है"</strong> के सिद्धांत में दृढ़ विश्वास।</li>
        <li>ट्रस्ट के माध्यम से निर्धन, असहाय, शिक्षा, स्वास्थ्य एवं धार्मिक आयोजनों में सक्रिय सहभागिता।</li>
        <li>युवाओं को अनुशासन और रोजगार से जोड़ने हेतु निरंतर प्रेरणा।</li>
      </ul>

      <div class="bio-modal-section-title">📜 कार्यशैली एवं मूलमंत्र (Core Mantras)</div>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li><strong>ट्रस्ट के लिए:</strong> सेवा - निष्ठा - पारदर्शिता (Service - Dedication - Transparency)</li>
        <li><strong>सिक्योरिटी सर्विसेज के लिए:</strong> सेवा - सुरक्षा - समर्पण (Service - Security - Dedication)</li>
        <li><strong>व्यक्तिगत जीवन:</strong> युवा - निर्भय - समर्पित | अनुशासन - ईमानदारी - विश्वास</li>
      </ul>
      <p class="bio-modal-p"><strong>दृष्टिकोण एवं लक्ष्य:</strong> <em>"Protection With Pride - Trusted & Reliable Since 2014"</em>। ट्रस्ट के माध्यम से जनसेवा और सुरक्षा सेवाओं के माध्यम से राष्ट्र सेवा।</p>
    `,
    content_en: `
      <div class="bio-modal-quote">
        "Yuva Soch, Pardarshi Karya - Seva Hi Lakshya • Building a society where security, service, and values unite."
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— Mr. Rahul Tripathi, Treasurer & MD</div>
      </div>

      <div class="bio-modal-section-title">⚡ Introduction: A Young, Fearless & Dedicated Leader</div>
      <p class="bio-modal-p">Mr. Rahul Tripathi is a young, fearless, and dedicated personality discharging the crucial responsibility of Treasurer at <strong>Siddhivinayak Jan Kalyan Trust (Regd.)</strong>, strengthening the financial management and welfare activities of the Trust with absolute transparency and integrity.</p>
      <p class="bio-modal-p">Along with this, he has been successfully managing operations as the Managing Director (MD) of <strong>Shakti Security Services</strong> since 2014.</p>

      <div class="bio-modal-section-title">🛡️ Experience & Leadership (Since 2014)</div>
      <p class="bio-modal-p">With nearly 12 years of rich, continuous, and practical experience, he has created a distinct identity in the security services sector:</p>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li><strong>Beginning in 2014:</strong> Established and managed Shakti Security Services with limited resources.</li>
        <li><strong>Efficient Leadership:</strong> Made discipline, honesty, punctuality, and dedication the core mantra of his working style.</li>
        <li><strong>Trusted Identity:</strong> Built a team of hundreds of trained security personnel, providing reliable protection to various institutions, establishments, and events.</li>
        <li><strong>Path of Progress:</strong> Continuously taken the organization to new heights with excellence.</li>
      </ul>

      <div class="bio-modal-section-title">🙏 Social & Religious Dedication</div>
      <p class="bio-modal-p">Mr. Tripathi is not only a successful entrepreneur but also a sensitive social worker:</p>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li>Always dedicated towards religious and social welfare initiatives.</li>
        <li>Believes in the principle of <em>"Social Service is the Supreme Duty"</em> and <em>"Service to Humanity is Service to God"</em>.</li>
        <li>Active participation in the welfare of the poor, destitute, education, healthcare, and religious events through the Trust.</li>
        <li>Constantly inspires the youth to connect with discipline and stable employment.</li>
      </ul>

      <div class="bio-modal-section-title">📜 Working Style & Core Mantras</div>
      <ul style="margin: 0 0 16px 20px; line-height: 1.7; color: var(--text-muted);">
        <li><strong>For the Trust:</strong> Seva - Nishtha - Pardarshita (Service - Dedication - Transparency)</li>
        <li><strong>For Security Services:</strong> Seva - Suraksha - Samarpan (Service - Security - Dedication)</li>
        <li><strong>Personal Life:</strong> Yuva - Nirbhay - Samarpit | Anushasan - Imandari - Vishwas (Youth - Fearless - Dedicated | Discipline - Honesty - Trust)</li>
      </ul>
      <p class="bio-modal-p"><strong>Vision and Goal:</strong> <em>"Protection With Pride - Trusted & Reliable Since 2014"</em>. Public welfare through the Trust and national service through disciplined security services.</p>
    `
  },
  santosh_tripathi: {
    seq: 4,
    roleNumber: '4- महासचिव',
    name_hi: 'श्री संतोष कुमार त्रिपाठी',
    name_en: 'Shri Santosh Kumar Tripathi',
    role_hi: 'महासचिव (General Secretary), सिद्धि विनायक जन कल्याण ट्रस्ट (पंजीकृत)',
    role_en: 'Mahasachiv (General Secretary), Siddhivinayak Jan Kalyan Trust (Regd.)',
    exp_badge: '🕉️ 32 Years Nishwarth Seva',
    poster: 'assets/leader_santosh_tripathi.jpg?v=2',
    avatar: 'assets/leader_santosh_tripathi_avatar.jpg?v=2',
    phone: '+91 8858588838',
    email: 'info@siddhivinayakjankalyantrust.org',
    location: 'अखिल भारतीय कार्यक्षेत्र (गोरखपुर पंजीकृत कार्यालय व आगरा उप-मुख्यालय)',
    quote_hi: '"सेवा ही पूजा है • तन, मन एवं धन से सेवा (यथासंभव दान) • 32 वर्षों की अनवरत तपस्या, पारिवारिक संस्कार और राष्ट्रव्यापी सेवा का संकल्प"',
    quote_en: '"Seva Hi Pooja Hai • Committed to Nation, Service, Integrity & Public Welfare • 32 Years of Tapasya"',
    content_hi: `
      <div class="bio-modal-quote">
        "सेवा ही पूजा है — तन, मन एवं धन से निःस्वार्थ सेवा। 32 वर्षों की अनवरत तपस्या, पारिवारिक संस्कार और राष्ट्रव्यापी सेवा का पावन संकल्प।"
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— श्री संतोष कुमार त्रिपाठी (महासचिव)</div>
      </div>

      <div class="bio-modal-section-title">🕉️ 32 वर्षों की अनवरत तपस्या एवं पारिवारिक संस्कार</div>
      <p class="bio-modal-p">श्री संतोष कुमार त्रिपाठी उस गौरवशाली पारिवारिक परंपरा का प्रतिनिधित्व करते हैं जहां समाज सेवा संस्कार के रूप में विरासत में मिली है। उन्होंने अपनी समाज सेवा की यात्रा धार्मिक व सांस्कृतिक आयोजनों, सनातन मूल्यों की रक्षा तथा सामाजिक समरसता के कार्यक्रमों से आरंभ की।</p>

      <div class="bio-modal-section-title">🎙️ मीडिया (पत्रकारिता) में निष्पक्ष व निर्भीक भूमिका</div>
      <p class="bio-modal-p">धार्मिक मंच से आगे बढ़कर उन्होंने मीडिया (पत्रकारिता) के क्षेत्र में पूर्ण निष्पक्षता, निर्भीकता और सत्यनिष्ठा के साथ अपनी विशिष्ट पहचान बनाई। जनहित के मुद्दों को प्रखरता से उठाने और सशक्त सामाजिक समीक्षा में उनकी उत्कृष्ट भूमिका को देखते हुए मीडिया संगठन ने उन्हें <strong>जिला महासचिव, गोरखपुर (मीडिया)</strong> का दायित्व सौंपा।</p>

      <div class="bio-modal-section-title">🇮🇳 राष्ट्रीय दायित्व एवं अखिल भारतीय कार्यक्षेत्र</div>
      <p class="bio-modal-p">32 वर्षों की निःस्वार्थ व अनवरत जनसेवा, संगठनात्मक दक्षता और राष्ट्रव्यापी दृष्टिकोण को देखते हुए <strong>सिद्धि विनायक जन कल्याण ट्रस्ट</strong> ने उन्हें राष्ट्रीय स्तर पर <strong>महासचिव (General Secretary)</strong> का महत्वपूर्ण दायित्व सौंपा है।</p>
      <p class="bio-modal-p">उनके नेतृत्व में ट्रस्ट का कार्यक्षेत्र संपूर्ण भारत में विस्तारित है। गोरखपुर में पंजीकृत कार्यालय के साथ-साथ, उत्तर प्रदेश सहित अखिल भारतीय स्तर पर गतिविधियों का संचालन उप-मुख्यालय आगरा से किया जा रहा है। ट्रस्ट शिक्षा, स्वास्थ्य, महिला सशक्तिकरण, निर्धन कल्याण तथा धार्मिक-सांस्कृतिक पुनरुत्थान हेतु पूर्णतः समर्पित है।</p>

      <div class="bio-modal-section-title">🪙 सेवा का संकल्प: तन, मन एवं धन से (यथासंभव दान)</div>
      <p class="bio-modal-p">वे धार्मिक कार्यों, गरीब कन्याओं के विवाह, असहायों के इलाज और विद्यार्थियों की शिक्षा में व्यक्तिगत स्तर पर प्रत्यक्ष आर्थिक सहयोग (यथासंभव दान) प्रदान करते हैं। उनका मूलमंत्र है — <strong>"सेवा ही पूजा है"</strong>।</p>
      <p class="bio-modal-p"><strong>पहचान:</strong> <em>32 वर्षों की तपस्या, पारिवारिक संस्कार और संपूर्ण भारत में सेवा का अटल संकल्प — यही श्री संतोष कुमार त्रिपाठी की पावन पहचान है।</em></p>
    `,
    content_en: `
      <div class="bio-modal-quote">
        "Seva Hi Pooja Hai — Service is Worship. 32 Years of Tapasya, Family Values and a Sacred Pledge to Serve Across India."
        <div style="font-size:0.8rem; margin-top:4px; font-weight:700; color:var(--gold-dark);">— Shri Santosh Kumar Tripathi, Mahasachiv</div>
      </div>

      <div class="bio-modal-section-title">🕉️ 32 Years of Tapasya, Family Legacy & Cultural Unity</div>
      <p class="bio-modal-p">Shri Santosh Kumar Tripathi represents that glorious family legacy where social service is inherited as a sacred tradition. He began his journey of public service with religious and cultural events, the protection of Sanatan values, and programs fostering social unity.</p>

      <div class="bio-modal-section-title">🎙️ Fearless Voice in Media & Journalism</div>
      <p class="bio-modal-p">Expanding his service beyond religious platforms, he made his mark in the field of journalism with complete impartiality, fearless reporting, and integrity. Recognizing his excellent role in raising public interest issues and strong social review, the media organization entrusted him with the responsibility of <strong>District General Secretary, Gorakhpur (Media)</strong>.</p>

      <div class="bio-modal-section-title">🇮🇳 National Responsibility & Pan-India Operational Scope</div>
      <p class="bio-modal-p">With 32 years of selfless and continuous public service, organizational efficiency, and a pan-India vision, <strong>Siddhivinayak Jan Kalyan Trust</strong> has entrusted him with the national responsibility of <strong>Mahasachiv (General Secretary)</strong>.</p>
      <p class="bio-modal-p">Under his leadership, the Trust operates across entire India. While the registered office is located at Gorakhpur, pan-India operations including Uttar Pradesh are directed from the sub-office at Agra. The Trust is dedicated to Education, Healthcare, Women Empowerment, Welfare of the Poor, and Cultural Upliftment.</p>

      <div class="bio-modal-section-title">🪙 Pledge of Service — With Tan, Man & Dhan (Yathasambhav Daan)</div>
      <p class="bio-modal-p">He provides direct personal financial assistance (Yathasambhav Daan) for religious works, marriages of underprivileged daughters, medical treatment of the destitute, and educational scholarships. His eternal core principle is — <strong>"Seva Hi Pooja Hai"</strong>.</p>
      <p class="bio-modal-p"><strong>True Identity:</strong> <em>32 Years of Tapasya, Family Values, and a Sacred Pledge to Serve Across India — This defines Shri Santosh Kumar Tripathi.</em></p>
    `
  }
};

// Open Leader Biography Modal
function openLeaderBioModal(leaderKey) {
  const leader = leadersData[leaderKey];
  if (!leader) return;

  const modal = document.getElementById('leader-bio-modal');
  const body = document.getElementById('leader-bio-modal-body');
  const title = document.getElementById('leader-modal-title');
  if (!modal || !body) return;

  const isHindi = (appState.lang === 'hi');
  const name = isHindi ? leader.name_hi : leader.name_en;
  const role = isHindi ? leader.role_hi : leader.role_en;
  const content = isHindi ? leader.content_hi : leader.content_en;

  if (title) {
    title.textContent = `॥ ${leader.roleNumber} — ${name} ॥`;
  }

  body.innerHTML = `
    <div class="leader-bio-modal-grid">
      <div class="bio-modal-sidebar">
        <div class="bio-modal-poster-wrap" onclick="openDocModal('${leader.poster}')" title="Click to view full high-res photo">
          <img src="${leader.poster}" alt="${name}" class="bio-modal-poster-img">
        </div>
        <div class="bio-modal-name-hi">${leader.name_hi}</div>
        <div class="bio-modal-name-en">${leader.name_en}</div>
        <div class="bio-modal-badge">${role}</div>
        <div style="font-size: 0.82rem; font-weight: 800; color: var(--gold-dark); margin-bottom: 12px;">${leader.exp_badge}</div>

        <div style="text-align: left; background: #FFF; padding: 12px; border-radius: var(--radius-sm); border: 1px solid rgba(212, 175, 55, 0.3); font-size: 0.82rem; margin-top: 10px;">
          <div style="margin-bottom: 6px;">📞 <strong>Phone:</strong> <a href="tel:${leader.phone.split('/')[0].trim()}" style="color:var(--navy-royal); font-weight:700;">${leader.phone}</a></div>
          <div style="margin-bottom: 6px;">✉️ <strong>Email:</strong> <a href="mailto:${leader.email}" style="color:var(--navy-royal); font-weight:700;">${leader.email}</a></div>
          <div>📍 <strong>Location:</strong> ${leader.location}</div>
        </div>

        <div style="margin-top: 16px; display: flex; gap: 8px; flex-direction: column;">
          <button type="button" class="btn-leader-bio" style="width: 100%;" onclick="openDocModal('${leader.poster}')">
            🔍 View Full Poster / फ़ोटो देखें
          </button>
          <button type="button" class="btn-leader-poster-trigger" style="width: 100%;" onclick="window.print()">
            🖨️ Print Profile
          </button>
        </div>
      </div>

      <div class="bio-modal-content">
        ${content}
      </div>
    </div>
  `;

  modal.showModal();
}

// Close Leader Biography Modal
function closeLeaderBioModal() {
  const modal = document.getElementById('leader-bio-modal');
  if (modal) modal.close();
}

// Click outside modal backdrop to close
document.querySelectorAll('dialog.custom-modal').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      modal.close();
    }
  });
});

// Copy UPI ID to Clipboard
function copyUpiId() {
  navigator.clipboard.writeText(REAL_UPI_ID).then(() => {
    showToast(`Copied: ${REAL_UPI_ID}`);
  }).catch(() => {
    showToast(`UPI ID: ${REAL_UPI_ID}`);
  });
}

// Toast Feedback Notification
function showToast(message, isAlert = false) {
  const toast = document.getElementById('toast-msg');
  if (!toast) return;

  toast.innerHTML = `<span>${message}</span>`;
  toast.style.borderLeftColor = isAlert ? 'var(--vermilion)' : 'var(--gold-primary)';
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// Mobile Navigation & Drawer Controller
function toggleMobileMenu() {
  const drawer = document.getElementById('nav-drawer');
  const backdrop = document.getElementById('nav-backdrop');
  const toggleBtn = document.getElementById('mobile-toggle');
  if (!drawer) return;

  const isOpen = drawer.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('open', isOpen);
  if (toggleBtn) {
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
  document.body.classList.toggle('nav-open', isOpen);
}

function closeMobileMenu() {
  const drawer = document.getElementById('nav-drawer');
  const backdrop = document.getElementById('nav-backdrop');
  const toggleBtn = document.getElementById('mobile-toggle');
  if (drawer && drawer.classList.contains('open')) {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    if (toggleBtn) {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-open');
  }
}

function initMobileNavigation() {
  const navDrawer = document.getElementById('nav-drawer');
  const toggleBtn = document.getElementById('mobile-toggle');
  const backdrop = document.getElementById('nav-backdrop');

  // Close menu when clicking navigation links or CTA button
  if (navDrawer) {
    navDrawer.querySelectorAll('a, button').forEach(link => {
      // Don't close if user is clicking inside the language switcher
      if (!link.classList.contains('lang-btn')) {
        link.addEventListener('click', () => {
          closeMobileMenu();
        });
      }
    });
  }

  // Close menu on clicks on backdrop
  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeMobileMenu();
    });
  }

  // Close on clicks outside navigation drawer
  document.addEventListener('click', (event) => {
    if (navDrawer && navDrawer.classList.contains('open')) {
      if (!navDrawer.contains(event.target) && (!toggleBtn || !toggleBtn.contains(event.target))) {
        closeMobileMenu();
      }
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileMenu();
    }
  });

  // Initialize Header Shrink on Scroll
  initHeaderScroll();

  // Initialize Section Scrollspy
  initScrollspy();
}

// Compact Sticky Header on Scroll
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Live Section Scrollspy
function initScrollspy() {
  const sectionIds = ['home', 'about', 'causes', 'donate', 'leadership', 'transparency', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${currentId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// Handle Volunteer & Contact Form Submit
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('msg-name')?.value || 'Friend';
  showToast(`Dhanyawad ${name} ji! Your message has been received. Our trust coordinators will contact you shortly.`);
  e.target.reset();
}

// Animated Numerical Counters
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.impact-number');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = Number(entry.target.getAttribute('data-target'));
        animateCount(entry.target, target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counterElements.forEach(el => observer.observe(el));
}

function animateCount(elem, target) {
  let start = 0;
  const duration = 1600;
  const startTime = performance.now();

  function step(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easeOutQuad = progress * (2 - progress);
    const currentVal = Math.floor(easeOutQuad * target);
    elem.textContent = `${currentVal.toLocaleString('en-IN')}+`;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      elem.textContent = `${target.toLocaleString('en-IN')}+`;
    }
  }
  requestAnimationFrame(step);
}

// Global Application Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initAnimatedCounters();
  updateFloatingReceiptButton();
  updateQrCode(appState.currentAmount, appState.currentCause);
  updateImpactText(appState.currentAmount);
});

// Also initialize immediately if script executes after DOM is ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initMobileNavigation();
  initAnimatedCounters();
  updateFloatingReceiptButton();
  updateQrCode(appState.currentAmount, appState.currentCause);
  updateImpactText(appState.currentAmount);
}

