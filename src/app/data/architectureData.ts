export interface Building {
  id: string;
  name: string;
  nameEn: string;
  year: number;
  architect: string;
  style: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Architect {
  id: string;
  name: string;
  nameEn: string;
  years: string;
  nationality: string;
  style: string[];
  description: string;
  representative: string[];
  image: string;
  avatar: string;
}

export interface ArchitecturalStyle {
  id: string;
  name: string;
  nameEn: string;
  period: string;
  startYear: number;
  endYear: number;
  description: string;
  characteristics: string[];
  color: string;
  image: string;
  representativeBuildings: string[];
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  type: "building" | "movement" | "person" | "event";
  image?: string;
  location?: string;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  abstract: string;
  readTime: number;
  tags: string[];
}

export const buildings: Building[] = [
  {
    id: "b1",
    name: "埃菲尔铁塔",
    nameEn: "Eiffel Tower",
    year: 1889,
    architect: "古斯塔夫·埃菲尔",
    style: "铁构结构主义",
    location: "法国·巴黎",
    description: "埃菲尔铁塔是1889年世界博览会的标志性建筑，以其大胆的铁构技术挑战了传统美学观念，成为近代建筑史上最具影响力的工程杰作之一。",
    image: "https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["铁构", "世博会", "标志建筑"],
  },
  {
    id: "b2",
    name: "包豪斯校舍",
    nameEn: "Bauhaus Dessau",
    year: 1926,
    architect: "瓦尔特·格罗皮乌斯",
    style: "现代主义",
    location: "德国·德绍",
    description: "包豪斯校舍是现代主义运动的圣地，以功能主义原则、玻璃幕墙和白色体块的组合，开创了20世纪建筑教育与实践的新纪元。",
    image: "https://images.unsplash.com/photo-1765715303682-2e6bc42af2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["现代主义", "包豪斯", "教育建筑"],
  },
  {
    id: "b3",
    name: "萨伏伊别墅",
    nameEn: "Villa Savoye",
    year: 1931,
    architect: "勒·柯布西耶",
    style: "国际式",
    location: "法国·普瓦西",
    description: "萨伏伊别墅完美诠释了柯布西耶的建筑五要素：底层架空柱、屋顶花园、自由平面、横向长窗和自由立面，成为近现代建筑史的经典。",
    image: "https://images.unsplash.com/photo-1760485524677-c7e00cc1c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["国际式", "柯布西耶", "住宅"],
  },
  {
    id: "b4",
    name: "哥特式大教堂",
    nameEn: "Gothic Cathedral",
    year: 1163,
    architect: "匿名工匠",
    style: "哥特复兴",
    location: "欧洲",
    description: "中世纪哥特式建筑以其尖拱、飞扶壁和彩色玻璃窗著称，19世纪的哥特复兴运动将这一风格重新带入近代建筑视野。",
    image: "https://images.unsplash.com/photo-1594657029516-4f63e2bd4cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["哥特复兴", "宗教建筑", "历史主义"],
  },
  {
    id: "b5",
    name: "野兽派住宅群",
    nameEn: "Brutalist Housing Complex",
    year: 1965,
    architect: "多位建筑师",
    style: "粗野主义",
    location: "英国·伦敦",
    description: "粗野主义建筑以裸露混凝土为主要材料，强调建筑的真实性与体量感，是战后社会主义住宅运动的重要表达方式。",
    image: "https://images.unsplash.com/photo-1759802805709-a6ac84be4d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["粗野主义", "混凝土", "社会住宅"],
  },
  {
    id: "b6",
    name: "后现代综合体",
    nameEn: "Postmodern Complex",
    year: 1982,
    architect: "多位建筑师",
    style: "后现代主义",
    location: "美国·纽约",
    description: "后现代主义建筑以装饰性、历史引用和色彩运用反拨了现代主义的严肃与克制，重新激活了建筑语言的多元表达。",
    image: "https://images.unsplash.com/photo-1741779628586-0fd1269de8cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["后现代", "装饰", "多元文化"],
  },
  {
    id: "b7",
    name: "现代高层办公楼",
    nameEn: "Modern High-rise Office",
    year: 1998,
    architect: "诺曼·福斯特",
    style: "高技派",
    location: "英国·伦敦",
    description: "高技派建筑展示了先进工程技术与建筑美学的融合，玻璃与钢材的组合创造了通透、轻盈的现代城市天际线。",
    image: "https://images.unsplash.com/photo-1760987786158-06a153d8f84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["高技派", "玻璃幕墙", "可持续"],
  },
  {
    id: "b8",
    name: "装饰艺术摩天楼",
    nameEn: "Art Deco Skyscraper",
    year: 1930,
    architect: "威廉·凡·阿伦",
    style: "装饰艺术",
    location: "美国·纽约",
    description: "装饰艺术风格摩天楼将几何装饰、金属光泽与垂直线条融为一体，是20世纪20-30年代美国经济繁荣期城市雄心的最佳注脚。",
    image: "https://images.unsplash.com/photo-1765728611828-40da7e26c30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    tags: ["装饰艺术", "摩天楼", "纽约"],
  },
];

export const architects: Architect[] = [
  {
    id: "a1",
    name: "勒·柯布西耶",
    nameEn: "Le Corbusier",
    years: "1887 – 1965",
    nationality: "瑞士/法国",
    style: ["现代主义", "国际式", "粗野主义"],
    description: "20世纪最重要的建筑师之一，提出建筑五要素理论，深刻影响了全球现代建筑的发展方向，被誉为\"现代建筑的旗手\"。",
    representative: ["萨伏伊别墅", "朗香教堂", "昌迪加尔规划"],
    image: "https://images.unsplash.com/photo-1760485524677-c7e00cc1c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    avatar: "LC",
  },
  {
    id: "a2",
    name: "瓦尔特·格罗皮乌斯",
    nameEn: "Walter Gropius",
    years: "1883 – 1969",
    nationality: "德国/美国",
    style: ["现代主义", "包豪斯"],
    description: "包豪斯学校创始人，致力于将艺术与工业设计融合，其教育理念与建筑实践深远影响了20世纪的设计史与建筑史。",
    representative: ["包豪斯校舍", "哈佛研究生中心", "泛美大楼"],
    image: "https://images.unsplash.com/photo-1765715303682-2e6bc42af2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    avatar: "WG",
  },
  {
    id: "a3",
    name: "密斯·凡·德·罗",
    nameEn: "Ludwig Mies van der Rohe",
    years: "1886 – 1969",
    nationality: "德国/美国",
    style: ["现代主义", "国际式", "极简主义"],
    description: '"少即是多"的践行者，以精确的钢结构与通透玻璃幕墙构建了国际式建筑的典范，是20世纪最具影响力的建筑师之一。',
    representative: ["巴塞罗那德国馆", "范斯沃斯住宅", "西格拉姆大厦"],
    image: "https://images.unsplash.com/photo-1760987786158-06a153d8f84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    avatar: "MV",
  },
  {
    id: "a4",
    name: "弗兰克·劳埃德·赖特",
    nameEn: "Frank Lloyd Wright",
    years: "1867 – 1959",
    nationality: "美国",
    style: ["有机建筑", "草原风格"],
    description: "有机建筑理论的先驱，主张建筑应与自然环境和谐共生，其横向延展的草原风格住宅和流水别墅均成为建筑史经典。",
    representative: ["流水别墅", "古根海姆博物馆", "约翰逊制蜡公司"],
    image: "https://images.unsplash.com/photo-1741779628586-0fd1269de8cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    avatar: "FW",
  },
  {
    id: "a5",
    name: "阿尔瓦·阿尔托",
    nameEn: "Alvar Aalto",
    years: "1898 – 1976",
    nationality: "芬兰",
    style: ["北欧现代主义", "有机现代主义"],
    description: "芬兰最伟大的建筑师，以人文关怀为核心，将自然材料（木材、砖石）与现代技术融合，开创了温暖而富有诗意的北欧现代主义。",
    representative: ["帕伊米奥疗养院", "维堡图书馆", "芬兰厅"],
    image: "https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    avatar: "AA",
  },
  {
    id: "a6",
    name: "路易斯·沙利文",
    nameEn: "Louis Sullivan",
    years: "1856 – 1924",
    nationality: "美国",
    style: ["芝加哥学派", "装饰艺术"],
    description: '"形式追随功能"理念的提出者，芝加哥学派的奠基人，其对钢结构高层建筑的探索奠定了现代摩天楼美学的基础。',
    representative: ["温赖特大厦", "保证大厦", "卡森百货公司"],
    image: "https://images.unsplash.com/photo-1765728611828-40da7e26c30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    avatar: "LS",
  },
];

export const architecturalStyles: ArchitecturalStyle[] = [
  {
    id: "s1",
    name: "历史主义",
    nameEn: "Historicism",
    period: "1820 – 1900",
    startYear: 1820,
    endYear: 1900,
    description: "19世纪盛行的建筑思潮，通过复兴古典、哥特、文艺复兴等历史风格，表达民族身份与文化认同，是工业化时代对传统的浪漫回望。",
    characteristics: ["历史风格复兴", "装饰性强", "民族主义表达", "折衷主义"],
    color: "#8b6914",
    image: "https://images.unsplash.com/photo-1594657029516-4f63e2bd4cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    representativeBuildings: ["英国国会大厦", "巴黎歌剧院", "德国科隆大教堂修复"],
  },
  {
    id: "s2",
    name: "新艺术运动",
    nameEn: "Art Nouveau",
    period: "1890 – 1910",
    startYear: 1890,
    endYear: 1910,
    description: "以有机曲线和植物纹样为特征的装饰艺术运动，试图突破历史主义的束缚，从自然形态中寻找新的建筑语言。",
    characteristics: ["有机曲线", "植物纹样", "整体设计", "工艺精致"],
    color: "#4a7c59",
    image: "https://images.unsplash.com/photo-1721244653693-1d13e68b66c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    representativeBuildings: ["布鲁塞尔塔塞尔住宅", "巴塞罗那圣家堂", "维也纳分离派大楼"],
  },
  {
    id: "s3",
    name: "现代主义",
    nameEn: "Modernism",
    period: "1920 – 1970",
    startYear: 1920,
    endYear: 1970,
    description: "以功能主义、工业化材料（钢、玻璃、混凝土）和简洁形式为核心，彻底革新了建筑的社会与美学使命，深刻塑造了20世纪的城市面貌。",
    characteristics: ["功能主义", "平屋顶", "开放平面", "玻璃幕墙", "去装饰化"],
    color: "#1e5c8e",
    image: "https://images.unsplash.com/photo-1765715303682-2e6bc42af2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    representativeBuildings: ["包豪斯校舍", "萨伏伊别墅", "西格拉姆大厦"],
  },
  {
    id: "s4",
    name: "粗野主义",
    nameEn: "Brutalism",
    period: "1950 – 1980",
    startYear: 1950,
    endYear: 1980,
    description: "源自法语béton brut（原始混凝土），以裸露混凝土结构和雄壮体量著称，是战后福利国家思想在建筑上的物质体现。",
    characteristics: ["裸露混凝土", "强调结构", "大体量", "反装饰"],
    color: "#5a5a6e",
    image: "https://images.unsplash.com/photo-1759802805709-a6ac84be4d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    representativeBuildings: ["马赛公寓", "波士顿市政厅", "英国国家剧院"],
  },
  {
    id: "s5",
    name: "后现代主义",
    nameEn: "Postmodernism",
    period: "1970 – 2000",
    startYear: 1970,
    endYear: 2000,
    description: "对现代主义纯粹性的反叛，通过历史引用、装饰复活和视觉游戏，重建建筑与公众、历史与文化的多元对话。",
    characteristics: ["历史引用", "装饰性", "色彩丰富", "讽喻与符号"],
    color: "#8e4a8e",
    image: "https://images.unsplash.com/photo-1741779628586-0fd1269de8cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    representativeBuildings: ["AT&T大厦", "波特兰公共服务楼", "文丘里住宅"],
  },
  {
    id: "s6",
    name: "高技派",
    nameEn: "High-Tech",
    period: "1970 – 至今",
    startYear: 1970,
    endYear: 2026,
    description: "以外露结构、工业材料和精密技术为美学核心，将建筑物理上的\"机器感\"推向极致，代表了工业时代对技术理性的崇拜。",
    characteristics: ["外露结构", "钢与玻璃", "模块化", "可持续技术"],
    color: "#2a7a8e",
    image: "https://images.unsplash.com/photo-1760987786158-06a153d8f84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    representativeBuildings: ["蓬皮杜艺术中心", "劳埃德大厦", "香港汇丰银行总部"],
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    year: 1851,
    title: "水晶宫落成",
    description: "约瑟夫·帕克斯顿设计的水晶宫在伦敦世博会展出，大规模运用铸铁与玻璃的预制结构，开启了现代建筑材料革命的序幕。",
    type: "building",
    location: "英国·伦敦",
  },
  {
    id: "t2",
    year: 1871,
    title: "芝加哥大火与城市重建",
    description: "芝加哥大火摧毁大半城市，迫使建筑师们尝试新材料与结构，直接促成了芝加哥学派的诞生与摩天楼时代的开始。",
    type: "event",
    location: "美国·芝加哥",
  },
  {
    id: "t3",
    year: 1889,
    title: "埃菲尔铁塔竣工",
    description: "为庆祝法国大革命百年而建，铁构工程师古斯塔夫·埃菲尔以大胆的金属结构挑战了公众的审美禁忌，成为技术时代的纪念碑。",
    type: "building",
    image: "https://images.unsplash.com/photo-1695067439031-f59068994fae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "法国·巴黎",
  },
  {
    id: "t4",
    year: 1896,
    title: "沙利文发表《功能主义》",
    description: "路易斯·沙利文发表文章提出\"形式追随功能\"，为现代建筑的功能主义哲学奠定了理论基础。",
    type: "event",
    location: "美国·芝加哥",
  },
  {
    id: "t5",
    year: 1907,
    title: "德意志制造同盟成立",
    description: "致力于将艺术与工业结合的德意志制造同盟在慕尼黑成立，成为包豪斯运动的先驱，引领了工业设计与建筑现代化运动。",
    type: "movement",
    location: "德国·慕尼黑",
  },
  {
    id: "t6",
    year: 1919,
    title: "包豪斯学校创立",
    description: "格罗皮乌斯在魏玛创建包豪斯学校，将美术、工艺与建筑教育融为一体，培养了大批现代设计先驱，深刻影响了20世纪的视觉文化。",
    type: "movement",
    image: "https://images.unsplash.com/photo-1765715303682-2e6bc42af2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "德国·魏玛",
  },
  {
    id: "t7",
    year: 1923,
    title: "柯布西耶发表《走向新建筑》",
    description: "柯布西耶的划时代著作《走向新建筑》出版，系统阐述了现代建筑的纯粹主义美学与社会使命，成为20世纪建筑理论的基石。",
    type: "person",
    location: "法国·巴黎",
  },
  {
    id: "t8",
    year: 1929,
    title: "巴塞罗那世博会德国馆",
    description: "密斯·凡·德·罗设计的德国馆以流动空间和极简材料语言颠覆了传统建筑空间观念，成为现代建筑史上的里程碑。",
    type: "building",
    location: "西班牙·巴塞罗那",
  },
  {
    id: "t9",
    year: 1931,
    title: "萨伏伊别墅落成",
    description: "柯布西耶的建筑五要素在萨伏伊别墅中得到完美诠释，标志着国际式建筑风格的成熟。",
    type: "building",
    image: "https://images.unsplash.com/photo-1760485524677-c7e00cc1c7b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    location: "法国·普瓦西",
  },
  {
    id: "t10",
    year: 1932,
    title: "国际式风格展览",
    description: "纽约现代艺术博物馆举办\"国际式\"建筑展，将欧洲现代主义运动正式引入美国，奠定了战后全球城市建设的主导风格。",
    type: "event",
    location: "美国·纽约",
  },
  {
    id: "t11",
    year: 1952,
    title: "马赛公寓落成",
    description: "柯布西耶设计的马赛公寓（居住单元）将城市设施整合进单一建筑，代表了现代主义对集体生活的乌托邦想象，也成为粗野主义的宣言。",
    type: "building",
    location: "法国·马赛",
  },
  {
    id: "t12",
    year: 1972,
    title: "普鲁伊特·伊戈住宅群爆破拆除",
    description: "圣路易斯的现代主义住宅综合体被爆破拆除，建筑评论家詹克斯宣称此事件标志着现代主义建筑的死亡，后现代主义时代由此开启。",
    type: "event",
    location: "美国·圣路易斯",
  },
  {
    id: "t13",
    year: 1977,
    title: "蓬皮杜艺术中心开放",
    description: "皮亚诺与罗杰斯设计的蓬皮杜中心将结构、管道全部外露，以工业美学震撼了保守的巴黎，宣告了高技派建筑的到来。",
    type: "building",
    location: "法国·巴黎",
  },
  {
    id: "t14",
    year: 1997,
    title: "毕尔巴鄂古根海姆博物馆",
    description: "弗兰克·盖里设计的钛金属曲面建筑引发\"毕尔巴鄂效应\"，单一建筑激活了整座城市的经济与文化复兴，开创了解构主义建筑的社会影响先例。",
    type: "building",
    location: "西班牙·毕尔巴鄂",
  },
];

export const articles: Article[] = [
  {
    id: "ar1",
    title: "包豪斯的跨学科遗产：从德绍到全球现代主义",
    author: "张明远",
    date: "2025-11-15",
    category: "现代主义",
    abstract: "本文回顾了包豪斯学校1919至1933年间的教育实践，分析其跨学科课程体系如何将绘画、雕塑与建筑统一于工艺哲学之下，并探讨其流亡欧美后对全球现代主义建筑传播的深远影响。",
    readTime: 12,
    tags: ["包豪斯", "现代主义", "建筑教育", "格罗皮乌斯"],
  },
  {
    id: "ar2",
    title: "柯布西耶建筑五要素的理论渊源与实践演变",
    author: "李晓慧",
    date: "2025-10-03",
    category: "建筑理论",
    abstract: "通过对柯布西耶早期著作、草图与建成作品的系统梳理，本文论证了建筑五要素并非凭空创造，而是对新古典主义、工业生产逻辑和纯粹主义绘画的综合转化，是一种系统性的建筑语言革命。",
    readTime: 18,
    tags: ["柯布西耶", "建筑五要素", "国际式", "理论"],
  },
  {
    id: "ar3",
    title: "19世纪哥特复兴运动的民族主义动因",
    author: "王建国",
    date: "2025-09-20",
    category: "历史主义",
    abstract: "本文聚焦于英国、德国和法国的哥特复兴运动，分析各国如何将中世纪建筑风格转化为民族认同的符号，探讨建筑风格选择背后的政治、宗教与文化逻辑。",
    readTime: 15,
    tags: ["哥特复兴", "历史主义", "民族主义", "19世纪"],
  },
  {
    id: "ar4",
    title: "粗野主义的社会理想与现实困境",
    author: "陈思远",
    date: "2025-08-11",
    category: "粗野主义",
    abstract: "战后粗野主义建筑曾被视为社会民主的物质宣言，然而数十年后却成为城市更新的对象。本文从社会学视角审视粗野主义建筑在不同历史语境下的接受变迁，并反思建筑师的社会责任。",
    readTime: 14,
    tags: ["粗野主义", "社会住宅", "城市更新", "战后建筑"],
  },
  {
    id: "ar5",
    title: "密斯·凡·德·罗的极简主义哲学与禅宗的暗合",
    author: "林雪梅",
    date: "2025-07-05",
    category: "建筑哲学",
    abstract: "本文尝试在跨文化比较的框架下，探讨密斯\"少即是多\"的极简主义美学与东方禅宗空间哲学的内在相通之处，以期为理解国际式建筑的精神维度提供新的视角。",
    readTime: 10,
    tags: ["密斯", "极简主义", "禅宗", "跨文化"],
  },
  {
    id: "ar6",
    title: "解构主义建筑：哲学思潮对空间实践的渗透",
    author: "赵宇飞",
    date: "2025-06-18",
    category: "后现代主义",
    abstract: "以盖里、哈迪德、李伯斯金为例，本文分析德里达解构哲学如何在建筑实践中转化为碎片化形式、不稳定结构和挑战重力的视觉语言，并评估其对当代城市地标建设的影响。",
    readTime: 16,
    tags: ["解构主义", "盖里", "哈迪德", "哲学"],
  },
  {
    id: "ar7",
    title: "近代建筑史中的中国在场：上海外滩的多元风格读解",
    author: "孙明华",
    date: "2025-05-22",
    category: "地域研究",
    abstract: "上海外滩建筑群浓缩了19世纪末至20世纪初西方建筑风格的多元演变，从新古典到装饰艺术。本文通过个案分析，探讨殖民情境下建筑风格的跨文化传播与地方化改造。",
    readTime: 20,
    tags: ["上海", "外滩", "装饰艺术", "殖民建筑"],
  },
  {
    id: "ar8",
    title: "阿尔瓦·阿尔托与北欧福利国家的建筑想象",
    author: "郑晨光",
    date: "2025-04-10",
    category: "地域现代主义",
    abstract: "本文通过阿尔托在1940-1960年代为芬兰设计的公共建筑群，分析北欧福利国家意识形态如何塑造了一种温暖、人文、注重材料感知的地域现代主义建筑话语。",
    readTime: 13,
    tags: ["阿尔托", "北欧", "福利国家", "地域主义"],
  },
];