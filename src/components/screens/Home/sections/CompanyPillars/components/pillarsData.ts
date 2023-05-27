import safetyPillarImg from '~/assets/img/mepco-pillar.png';
import productsPillarImg from '~/assets/img/mepco-pillar-2.png';
import investorsPillarImg from '~/assets/img/mepco-pillar-3.png';
import environmentPillarImg from '~/assets/img/mepco-pillar-4.png';

export interface pillarType {
  image: string;
  caption: string;
  text: string;
}
export const pillarsArray: Array<pillarType> = [
  {
    caption: 'الصحة والسلامة',
    image: safetyPillarImg,
    text: "تلتزم شركة مبكو بالصحة والسلامة والأمن في أعمالها، وتعمل على تقليل المخاطر وتطبيق معايير السلامة المهنية والسلامة من الحرائق والمواد الخطرة. وتلتزم الشركة بتدابير السلامة في جميع الإدارات وفي جميع أعمال الصيانة والمعدات والبناء. وتعمل على تشغيل المرافق بطريقة آمنة وفعالة، وتسعى لتحسين أدائها في هذه المجالات بالتعاون مع الشركاء والمقاولين والمنافسين والجهات الرقابية، وتوفر التغطية التأمينية اللازمة لحماية الأفراد والمنشآت."
  },
  {
    caption: 'المنتجات',
    image: productsPillarImg,
    text: 'منتجات MEPCO معروفة بجودتها واستقرارها وموثوقيتها. تستخدم الشركة تكنولوجيا ومعدات حديثة لإنتاج منتجاتها، ولديها تركيز قوي على الاستدامة والمسؤولية البيئية. تستخدم منتجات MEPCO من قبل العملاء في منطقة الشرق الأوسط وأفريقيا وأوروبا وآسيا، ولديها سمعة قوية في تقديم منتجات عالية الجودة وخدمة العملاء الممتازة.',
  },
  {
    caption: 'المستثمرون',
    image: investorsPillarImg,
    text: "مبكو الرائدة في صناعة الورق المتكاملة عمودياً في المنطقة، وأثر نجاحها بشكل إيجابي على الاقتصاد المحلي وتطوير المنطقة. تلتزم الشركة بالابتكار والاستدامة ورضا العملاء، وتتميز بالعلاقات العكسية الإيجابية بين أقسامها، مما يحقق أعلى مستويات الإنتاجية والجودة والكفاءة في العمل، وجذب الشركة للمستثمرين العالميين.",
  },
  {
    caption: 'البيئة',
    image: environmentPillarImg,
    text: 'تلتزم شركة موبكو بممارسات تجارية مستدامة تركز على الاقتصاد والجدوى والعدالة الاجتماعية والبيئة الصحية. كما تعمل الشركة على تطوير ممارسات أعمال مستدامة تلبي الاحتياجات الحالية دون المساس برفاهية الأجيال القادمة. وتتشارك شركة "واسكو" التابعة لموبكو نفس التزام الشركة الأم بالممارسات المستدامة. وعن طريق دعم الممارسات المستدامة، يمكننا جميعاً تحقيق التنمية المستدامة والحفاظ على الموارد الطبيعية للأجيال القادمة.',
  },
];
