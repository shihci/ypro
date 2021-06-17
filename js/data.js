// JavaScript Document
//home
var news = {
	news_item_tw:[
		{
			title: "二十年里程碑資訊科技整合服務",
            date: "2021/03/16",
			content: "英寶科技創立二十余年，擁有專業的技術、豐富的經驗,因應企業的需求，量身定做最適合的解決方案",
			img:"onclick='javascript:location.href='http://www.wibibi.com''"
		},
		{
			title: "自動化控制",
            date: "2021/03/16",
			content: "實踐自動化控制，穩定創新，鉅細靡遺。減少成本，效益最大化。",
			img:"onclick='javascript:location.href='http://www.google.com''"
		},
		{
			title: "企業廠務",
            date: "2021/03/16",
			content: "提供整合式監控管理平台，提高產業運作效能。應用統計分析技術，對廠務系統的數據進行蒐集與監控，協助使用者管理與整合，降低異常所造成的損失。"
		},
		{
			title: "【徵才招募】成為英寶精英",
            date: "2021/03/16",
			content: "本公司目前擴大職缺徵才,歡迎擁有實力的你加入英寶團隊, 有意願者歡迎上1111人力銀行查看最新職缺！"
		},
		{
			title: "【公告】防疫需求須知",
            date: "2021/03/16",
			content: "因應新冠肺炎(COVID-19)疫情問題，凡進公司之人員、維修人員、訪客等皆需量體溫，量測體溫未超過37.5度者，方可進入公司。"
		}
		
		
	],
	news_item_cn:[
		{
			title: "二十年里程碑资讯科技整合服务",
            date: "2021/03/16",
			content: "英宝科技创立二十余年，拥有专业的技术、丰富的经验,因应企业的需求，量身定做最适合的解决方案"
		},
		{
			title: "自动化控制",
            date: "2021/03/16",
			content: "实践自动化控制，稳定创新，巨细靡遗。减少成本，效益最大化。"
		},
		{
			title: "企业厂务",
            date: "2021/03/16",
			content: "提供整合式监控管理平台，提高产业运作效能。应用统计分析技术，对厂务系统的数据进行搜集与监控，协助使用者管理与整合，降低异常所造成的损失。"
		},
		{
			title: "【征才招募】成为英宝精英",
            date: "2021/03/16",
			content: "本公司目前扩大职缺征才,欢迎拥有实力的你加入英宝团队, 有意愿者欢迎上1111人力银行查看最新职缺！"
		},
		{
			title: "【公告】防疫需求须知",
            date: "2021/03/16",
			content: "因应新冠肺炎(COVID-19)疫情问题，凡进公司之人员、维修人员、访客等皆需量体温，量测体温未超过37.5度者，方可进入公司。"
		}
		
		
	],
	news_item_en:[
		{
			title: "Technology Integration Service",
            date: "2021/03/16",
			content: "YPRO was founded in 1999, which has professional technique,experiences.The company customize the most suitable solution with client's need."
		},
		{
			title: "Intelligent Project",
            date: "2021/03/16",
			content: "Implement Intelligent Project.Reduce costs and maximize benefits."
		},
		{
			title: "Facility Monitor Control System Project",
            date: "2021/03/16",
			content: "It provides an integrated monitoring management terrace to improve the industrial efficiency.Use statistical analysis to collect and monitor control system data.。"
		},
		{
			title: "【job Posting】Join Us",
            date: "2021/03/16",
			content: "YPRO, is searching for global talents to join us. We invite outstanding talents to apply for the position."
		},
		{
			title: "【Posting】Pandemic-prevention policies",
            date: "2021/03/16",
			content: "In response to the Covid19 policy,everyone must wears a mask and checks your temperature before enter company."
		}
		
		
	],
};
	var vm = new Vue({
		el: '#news',
		data: news
        });

//client_data
var partners_tw = {
				clients_item:[
            {
				modal:"clients01",
                title: "台灣積體電路製造股份有限公司",
				title_en:"TSMC(Taiwan Semiconductor Manufacturing Co., Ltd.)",
                abstract: "全球首家專業積體電路製造服務的公司，為專業積體電路製造服務業的創始者與領導者。"
            },
            {
				modal:"clients02",
                title: "采鈺科技股份有限公司",
				title_en:"VisEra(VisEra Technologies Company Ltd.)",
                abstract: "台積電子公司。采鈺為全球影像感測元件服務市場的領導者，主要從事影像感測器之後段製程生產與服務及彩色濾光膜製造。"
            },
            {
				modal:"clients03",
                title: "鵬鼎控股（深圳）股份有限公司",
				title_en:"AVARY HOLDING",
                abstract: "主要從事各類分類印製電路板的設計，研發，製造與銷售業務的專業服務公司，專注於為行業領先的客戶提供多種PCB產品及服務。"
            },
            {
				modal:"clients04",
                title: "麗明營造股份有限公司",
				title_en:"BEST Giving",
                abstract: "麗明營造成為國內大型綜合營造廠之一，營建個案遍及國內，指標性個案如台中國家個劇院，近年來更將觸角伸向海外。"
            },
				{
				modal:"clients05",
                title: "世界先進積體電路股份有限公司",
				title_en:"VIS",
                abstract: "世界先進為「特殊積體電路製造服務」領導廠商，自1994年成立以來，在製程技術及生產效能上不斷精進，並持續提供最具成本效益的完整解決方案及高附加價值的服務予客戶。"
            },
				{
				modal:"clients06",
                title: "經濟部智慧財產局",
				title_en:"TIPO",
                abstract: "經濟部智慧財產局主要掌理專利權、商標專用權、著作權、積體電路電路布局、營業秘密等與智慧財產權有關之業務。"
            },
				{
				modal:"clients07",
                title: "群創光電股份有限公司",
				title_en:"INNOLUX",
                abstract: "群創光電整合產品製造供應鏈，藉由面板紮根、垂直整合之創新經營方式，提供客戶完整解決方案，擁有良好TFT-LCD基礎及生產品質，優良的製程技術及零組件管理。"
            },
				{
				modal:"clients08",
                title: "美光科技公司",
				title_en:"Micron Technology, Inc.",
                abstract: "美光科技公司是美國一家總部位於愛達荷州波夕的半導體製造公司。主要業務為生產多種形式的半導體器件，包括動態隨機存取存儲器，閃存和固態驅動器；其主要產品包括DRAM、NAND快閃記憶體、CMOS影像感測器、其它半導體元件和記憶體模組。"
            },
				{
				modal:"clients09",
                title: "基隆市衛生局",
				title_en:"Keelung City Health Bureau",
                abstract: ""
            },
				{
				modal:"clients10",
                title: "新北市衛生局",
				title_en:"New Taipei Health Department",
                abstract: ""
            },
				{
				modal:"clients11",
                title: "彰化縣衛生局",
				title_en:"Changhua County Public Health Bureau",
                abstract: ""
            },
				{
				modal:"clients12",
                title: "嘉義市衛生局",
				title_en:"Chiayi City Public Health Bureau",
                abstract: ""
            },
				{
				modal:"clients13",
                title: "彰化基督教醫院",
				title_en:"Changhua Christian Hospital",
                abstract: "為中台灣最完善的醫學中心之一，成立多個極具國際醫療水準之特色醫療中心、設置先進醫療設備，並致力於完整醫療資訊系統的建立，提供海內外人士優質之照護環境。"
            },
			{
				modal:"clients14",
                title: "泛太建築經理股份有限公司",
				title_en:"Fantai",
                abstract: "泛太建經是全球最大房仲品牌「21世紀不動產」旗下轉投資的專業履約保證公司，提供不動產買賣價金履約保證和購屋後的整合性需求的相關服務。"
            },
				{
				modal:"clients15",
                title: "台灣觀光學院",
				title_en:"Culinary Institute Of Taiwan",
                abstract: "前身為「臺灣觀光經營管理專科學校」，2006年改制為「臺灣觀光學院」，以觀光餐旅為教學方向的私立技職院校。"
            },
				
				
        ],
	
	
		clients_item_cn:[
            {
				modal:"clients01",
                title: "台湾积体电路制造股份有限公司",
				title_en:"TSMC(Taiwan Semiconductor Manufacturing Co., Ltd.)",
                abstract: "全球首家专业积体电路制造服务的公司，为专业积体电路制造服务业的创始者与领导者。"
            },
            {
				modal:"clients02",
                title: "采钰科技股份有限公司",
				title_en:"VisEra(VisEra Technologies Company Ltd.)",
                abstract: "台积电子公司。采钰为全球影像感测元件服务市场的领导者，主要从事影像感测器之后段制程生产与服务及彩色滤光膜制造。"
            },
            {
				modal:"clients03",
                title: "鹏鼎控股（深圳）股份有限公司",
				title_en:"AVARY HOLDING",
                abstract: "主要从事各类分类印制电路板的设计，研发，制造与销售业务的专业服务公司，专注于为行业领先的客户提供多种PCB产品及服务。"
            },
            {
				modal:"clients04",
                title: "丽明营造股份有限公司",
				title_en:"BEST Giving",
                abstract: "丽明营造成为国内大型综合营造厂之一，营建个案遍及国内，指标性个案如台中国家个剧院，近年来更将触角伸向海外。"
            },
				{
				modal:"clients05",
                title: "世界先进积体电路股份有限公司",
				title_en:"VIS",
                abstract: "世界先进为「特殊积体电路制造服务」领导厂商，自1994年成立以来，在制程技术及生产效能上不断精进，并持续提供最具成本效益的完整解决方案及高附加价值的服务予客户。"
            },
				{
				modal:"clients06",
                title: "经济部智慧财产局",
				title_en:"TIPO",
                abstract: "经济部智慧财产局主要掌理专利权、商标专用权、著作权、积体电路电路布局、营业秘密等与智慧财产权有关之业务。"
            },
				{
				modal:"clients07",
                title: "群创光电股份有限公司",
				title_en:"INNOLUX",
                abstract: "群创光电整合产品制造供应链，藉由面板扎根、垂直整合之创新经营方式，提供客户完整解决方案，拥有良好TFT-LCD基础及生产品质，优良的制程技术及零组件管理。"
            },
				{
				modal:"clients08",
                title: "美光科技公司",
				title_en:"Micron Technology, Inc.",
                abstract: "美光科技公司是美国一家总部位于爱达荷州波夕的半导体制造公司。主要业务为生产多种形式的半导体器件，包括动态随机存取存储器，闪存和固态驱动器；其主要产品包括DRAM、NAND快闪记忆体、CMOS影像感测器、其它半导体元件和记忆体模组。"
					
            },
				{
				modal:"clients09",
                title: "基隆市卫生局",
				title_en:"Keelung City Health Bureau",
                abstract: ""
            },
				{
				modal:"clients10",
                title: "新北市卫生局",
				title_en:"New Taipei Health Department",
                abstract: ""
            },
				{
				modal:"clients11",
                title: "彰化县卫生局",
				title_en:"Changhua County Public Health Bureau",
                abstract: ""
            },
				{
				modal:"clients12",
                title: "嘉义市卫生局",
				title_en:"Chiayi City Public Health Bureau",
                abstract: ""
            },
				{
				modal:"clients13",
                title: "彰化基督教医院",
				title_en:"Changhua Christian Hospital",
                abstract: "为中台湾最完善的医学中心之一，成立多个极具国际医疗水准之特色医疗中心、设置先进医疗设备，并致力于完整医疗资讯系统的建立，提供海内外人士优质之照护环境。"
            },
			{
				modal:"clients14",
                title: "泛太建筑经理股份有限公司",
				title_en:"Fantai",
                abstract: "泛太建经是全球最大房仲品牌「21世纪不动产」旗下转投资的专业履约保证公司，提供不动产买卖价金履约保证和购屋后的整合性需求的相关服务。"
            },
				{
				modal:"clients15",
                title: "台湾观光学院",
				title_en:"Culinary Institute Of Taiwan",
                abstract: "前身为「台湾观光经营管理专科学校」，2006年改制为「台湾观光学院」，以观光餐旅为教学方向的私立技职院校。"
            },
				
				
        ],
	clients_item_en:[
            {
				modal:"clients01",
                title: "TSMC",
				title_en:"Taiwan Semiconductor Manufacturing Co., Ltd.",
                abstract: "TSMC pioneered the pure-play foundry business model, and has been the world's largest dedicated semiconductor foundry ever since."
            },
            {
				modal:"clients02",
                title: "VisEra",
				title_en:"VisEra Technologies Company Ltd.",
                abstract: "Visera is TSMC's subsidiary.It is the leading independent image sensor foundry provider focusing on high quality, comprehensive turn-key services."
            },
            {
				modal:"clients03",
                title: "AVARY HOLDING",
				title_en:"Avary Holding (Shenzhen) Co., LTD",
                abstract: "Avary is mainly engaged in the design, research and development, manufacture, and sales of various kinds of printed circuit boards."
            },
            {
				modal:"clients04",
                title: "LEE MING",
				title_en:"BEST Giving",
                abstract: "Lee Ming is one of the country's largest construction company who has construction cases all over the country."
            },
				{
				modal:"clients05",
                title: "VIS",
				title_en:"Vanguard International Semiconductor Corporation",
                abstract: "Vanguard International Semiconductor Corporation (VIS) is a leading specialty IC foundry service provider."
            },
				{
				modal:"clients06",
                title: "TIPO",
				title_en:"Taiwan Intellectual Property Office",
                abstract: "TIPO was established in 1999 by combining patent, trademark, copyright, IC layout and trade secret authorities into one agency."
            },
				{
				modal:"clients07",
                title: "INNOLUX",
				title_en:"Innolux Corporation",
                abstract: "Innolux was established in 2003, which id offering a full range  and touch-control screens.nt skills to the perfection of process technologies and components."
            },
				{
				modal:"clients08",
                title: "Micron",
				title_en:"Micron Technology, Inc.",
                abstract: "As the leader in innovative memory solutions, Micron is helping the world make sense of data by delivering technology that is transforming how the world uses information to enrich life for all. Micron is the only company manufacturing today's major memory and storage technologies: DRAM, NAND, NOR and 3D XPoint™ memory."
            },
				{
				modal:"clients09",
                title: "Keelung City Health Bureau",
				title_en:"",
                abstract: ""
            },
				{
				modal:"clients10",
                title: "New Taipei Health Department",
				title_en:"",
                abstract: ""
            },
				{
				modal:"clients11",
                title: "Changhua County Public Health Bureau",
				title_en:"",
                abstract: ""
            },
				{
				modal:"clients12",
                title: "Chiayi City Public Health Bureau",
				title_en:"",
                abstract: ""
            },
				{
				modal:"clients13",
                title: "Changhua Christian Hospital",
				title_en:"",
                abstract: "It is not only the best-known Christian hospital with special features in Taiwan, but also the unique medical center with a century history in central Taiwan."
            },
			{
				modal:"clients14",
                title: "Fantai",
				title_en:"",
                abstract: "Fantai is a professional escrow company .It provides escrow about real easte and Intergrated need after buying a house."
            },
				{
				modal:"clients15",
                title: "Culinary Institute Of Taiwan",
				title_en:"",
                abstract: "Culinary Institute Of Taiwan is a Private Technical College which takes tourism as the teaching direction."
            },
		
				
				
        ],
	
		partners_item:[
			{
				modal: "partners01",
				title: "台灣矽科宏晟科技股份有限公司",
				title_en: "Cica-Huntek Chemical Technology Taiwan Co., Ltd.",
				abstract: "台灣矽科宏晟科技致力於開發設計化學品供應設備，在集成電路、光電(TFT LCD、LED、OLED)、太陽能、封裝測試等高科技電子廠製程設備皆有顯著的成績，深獲客戶的高度評價。"
			},
			{
				modal: "partners02",
				title: "帆宣系統科技股份有限公司",
				title_en: "MIC(Marketech International Corp.)",
				abstract: "帆宣系統科技股份有限公司致力於引進國內半導體、光電相關產業發展所需之尖端設備與技術，支援國內高科技產業的發展，並落實工安與環保政策。"
			},
			{
				modal: "partners03",
				title: "巨路國際股份有限公司",
				title_en: "Lumax",
				abstract: "	巨路是台灣第一家橫跨工業程控及電子通信領域的上市公司。自1975年創立以來，巨路就以「世界級整體解決方案的提供者」(World-Class Total Solution Provider)為營運目標。"
			},
			{
				modal: "partners04",
				title: "三福氣體股份有限公司",
				title_en: "Air Products and Chemicals, Inc.",
				abstract: "Air Products 是全球首屈一指的液化天然氣製程技術與設備供應商。公司開發、設計、建造、擁有和經營一些全球最大的工業氣體專案，包括持續將豐富的自然資源轉換為合成氣以生產高價值電力、燃料和化學品的氣化專案。"
			},
			{
				modal: "partners05",
				title: "漢唐集成股份有限公司",
				title_en: "UIS(United Integrated Service)",
				abstract: "	漢唐集成是一個以「全面性整合服務」方式提供工程建設的公司。該公司提供高科技產業建廠之系統集成設計與建造的需求。"
			},
			{
				modal: "partners06",
				title: "洋基工程股份有限公司",
				title_en: "Yankey Engineering Co.,LTD.",
				abstract: "洋基工程成立於1980年，早年專注於食品廠冷凍技術的研發與規劃，隨著台灣經濟起飛的脈動轉型，於1985年正式跨足電子產業，一路到現今的面板、太陽能、半導體、光學、面板、生技等等產業。"
			},
			{
				modal: "partners07",
				title: "台灣村田機械股份有限公司",
				title_en: "Murata Machinery, Ltd.",
				abstract: "村田機械的主要產品是工業機械，如紡織機械，車床機械，鈑金機械和通訊設備，如數字多功能產品。此外，村田機械還提供以自動化存儲和自動化運輸系統為中心的工廠自動化和物流系統，以及為半導體晶圓廠設計的無塵室自動化材料處理系統。"
			},
			{
				modal: "partners08",
				title: "日月光投資控股股份有限公司",
				title_en: "ASE Technology Holding Co., Ltd.",
				abstract: "日月光投控為全球領先半導體封裝與測試製造服務公司，提供半導體客戶包括晶片前段測試及晶圓針測至後段封裝、材料及成品測試的一元化服務。結合專業電子代工製造服務的環電公司，提供完善的電子製造整體解決方案，以卓越技術及創新思維服務半導體、電子與數位科技市場。"
			},
			{
				modal: "partners09",
				title: "亞翔工程股份有限公司",
				title_en: "L&K Engineering Co.,Ltd",
				abstract: "1978年亞翔工程公司成立，跟隨台灣工業的脈動，歷經實驗室工程、化學製藥廠、光電及半導體電子工業的整廠機電工程與無塵室工程，順應時空背景的轉變，調整經營觀念、開發新技術。"
			},
			{
				modal: "partners10",
				title: "沃亞科技股份有限公司",
				title_en: "Weltall Technology Corporation ",
				abstract: "沃亞科技不僅僅是儀器設備代理商，更是系統整合服務商，所提供的服務包含提供各式分析儀、監測系統規劃設計、數據圖控軟體、系統整合測試、現場管線施工、系統操作教育訓練及定期保養維護等售後服務。"
			},
			{
				modal: "partners11",
				title: "兆聯實業股份有限公司",
				title_en: "Mega Union Technology Inc. ",
				abstract: "兆聯實業成立於2005年，為專業之超純水及廢水回收系統規劃設計 之工程公司，同時提供Polish樹脂再生、RO清洗服務、系統營運相關耗材租賃、化學品等與用水相關衍生之各項服務。"
			},
			{
				modal: "partners12",
				title: "藍鳥集團",
				title_en: "BLUEBIRDME",
				abstract: "上海藍鳥機電有限公司是一家信息自動化的創新服務商，是專門致力於工業信息自動化解決方案的服務、技術研究、應用軟件開發的高科技公司。"
			},
			{
				modal: "partners13",
				title: "帝商科技",
				title_en: "REGAL SCAN TECH",
				abstract: "帝商科技自1994成立，提供AIDC(自動辨識及資料收集)系統整合服務於台灣/大陸的各行各業。帝商產品包含條碼掃描器、條碼標籤列印機、Android PDA、RFID讀取設備、門禁系統......等等。"
			},
			{
				modal: "partners14",
				title: "博世",
				title_en: "BOSCH(Robert Bosch GmbH)",
				abstract: "羅伯特·博世有限公司，俗稱博世、BOSCH，是一家德國跨國公司 的工程和技術公司，總部設在格林根。博世的核心運營領域橫跨四個業務部門：移動性（硬件和軟件），消費品（包括家用電器和電動工具），工業技術（包括驅動和控制）以及能源和建築技術。"
			},
			{
				modal: "partners15",
				title: "安迅士",
				title_en: "AXIS(Axis Communications AB)",
				abstract: "AXIS創立於西元1984年，安訊士網絡通訊公司是一家總部位於瑞典，專業提供與實施網絡視頻解決方案的 IT 公司。"
			},
			
			{
				modal: "partners16",
				title: "研華科技",
				title_en: "ADVANTECH（Advantech Co., Ltd.）",
				abstract: "研華股份有限公司，簡稱研華或研華科技，是臺灣一家工業自動化設備公司，目前工業電腦（IPC）市佔率世界排名第一。2018年獲評為台灣品牌價值第五名。"
			},
			{
				modal: "partners17",
				title: "漢軍科技",
				title_en: "HUNDURE",
				abstract: "漢軍科技股份有限公司成立於1989年，由富有安防產業經驗之團隊所共同創辦。研發各式RFID辨識系統、考勤機、門禁產品、讀卡機、指紋機、以及週邊配備。"
			},
			{
				modal: "partners18",
				title: "Genetec",
				title_en: "Genetec",
				abstract: "Genetec總部位於加拿大魁北克省蒙特利爾，而辦公地點遍及全球：墨西哥城，聖保羅，杜塞爾多夫，巴黎，迪拜，東京和新加坡。"
			},
			{
				modal: "partners19",
				title: "精技電腦",
				title_en: "unitech(Unitech Computer Co., Ltd.)",
				abstract: "精技電腦股份有限公司在1979年3月成立，初期以應用微處理器提供顧客自動化系統為主要業務， 四十幾年來一直持續專注於「提供能提昇客戶生產力的資訊產品及服務」。"
			},
			{
				modal: "partners20",
				title: "美國泰科國際有限公司簡介",
				title_en: "TYCO(Tyco International)",
				abstract: "泰科國際有限公司（Tyco International Ltd.）創建於1960年，泰科國際是一家多元化的生產與服務型企業。泰科是世界最大的電氣、電子元件製造商和服務商。"
			},
			{
				modal: "partners21",
				title: "日本電氣",
				title_en: "NEC(NEC Corporation)",
				abstract: "日本電氣，簡稱日電、NEC，是日本一家跨國資訊科技公司，總部位於東京都港區。NEC是住友集團的成員。它的經營範圍主要分成三個部分：IT解決方案、網路解決方案和電子裝置。"
			},
			{
				modal: "partners22",
				title: "MOXA",
				title_en: "MOXA",
				abstract: "MOXA是一個全球頂尖的設備連網產品供應商。MOXA為系統整合商和加值轉銷商持續提供世界級的工業級網路產品。"
			},
			{
				modal: "partners23",
				title: "茂旭",
				title_en: "SOYAL",
				abstract: "茂旭資訊股份有限公司是一家享譽業內、穩健發展的門禁控制生產企業，成立於1993年，初期是以客戶委託設計門禁產品為主，由於研發的穩定性及功能性大受市場好評，滿足門禁產業的需求。"
			},
			
			{
				modal: "partners24",
				title: "Wonderware",
				title_en: "Wonderware",
				abstract: "Wonderware是一個工業軟件品牌，現在由Aveva擁有，並以AVEVA名稱重新命名。Wonderware是Invensys plc的一部分，Invensys plc於2014年1月被Schneider Electric收購。"
			},
			{
				modal: "partners25",
				title: "思科系統",
				title_en: "cisco(Cisco Systems, Inc.)",
				abstract: "思科系統成立於1984年，是一間跨國際綜合技術企業，總部設於加州矽谷。思科開發、製作和售賣網路硬體、軟體、通訊裝置等高科技產品及服務，並透過子公司（例子有OpenDNS、Webex、Jasper）打入其他科技市場。"
			},
			{
				modal: "partners26",
				title: "泓格科技",
				title_en: "ICP DAS",
				abstract: "	泓格科技成立於1993年，泓格科技一直致力於發展遠端I/O控 制器、分散式I/O模組、I/O資料擷取卡，擁有完整的工業自動化解決方案及完善的售後服務，近年來更積極發展可程式自動化控制器、網際網路相關產品及運 動控制系統等一系列產品。"
			},
			{
				modal: "partners27",
				title: "DELL",
				title_en: "DELL(Dell Inc.)",
				abstract: "戴爾股份有限公司以生產、設計、銷售家用以及辦公室電腦而聞名，不過它同時也涉足高階電腦市場，生產與銷售伺服器、資料儲存裝置或網路裝置等。"
			},
			{
				modal: "partners28",
				title: "惠烈－普克公司(簡稱「惠普」)",
				title_en: "HP(Hewlett-Packard Company) ",
				abstract: "惠烈－普克公司是一間總部設在美國加州帕羅奧圖的跨國科技公司。惠普公司主要研發，生產和銷售筆記型電腦、一體機、桌上型電腦、平板電腦、智慧型手機、行動網路、掃描器、列印與耗材、投影機、數位產品、電腦周邊、智慧型電視和服務產品。"
			}
			
			
					
				],
		partners_item_cn:[
			{
				modal: "partners01",
				title: "台湾矽科宏晟科技股份有限公司",
				title_en: "Cica-Huntek Chemical Technology Taiwan Co., Ltd.",
				abstract: "台湾矽科宏晟科技致力于开发设计化学品供应设备，在集成电路、光电(TFT LCD、LED、OLED)、太阳能、封装测试等高科技电子厂制程设备皆有显著的成绩，深获客户的高度评价。"
			},
			{
				modal: "partners02",
				title: "帆宣系统科技股份有限公司",
				title_en: "MIC(Marketech International Corp.)",
				abstract: "帆宣系统科技股份有限公司致力于引进国内半导体、光电相关产业发展所需之尖端设备与技术，支援国内高科技产业的发展，并落实工安与环保政策。"
			},
			{
				modal: "partners03",
				title: "巨路国际股份有限公司",
				title_en: "Lumax",
				abstract: "	巨路是台湾第一家横跨工业程控及电子通信领域的上市公司。自1975年创立以来，巨路就以「世界级整体解决方案的提供者」(World-Class Total Solution Provider)为营运目标。"
			},
			{
				modal: "partners04",
				title: "三福气体股份有限公司",
				title_en: "Air Products and Chemicals, Inc.",
				abstract: "Air Products 是全球首屈一指的液化天然气制程技术与设备供应商。公司开发、设计、建造、拥有和经营一些全球最大的工业气体专案，包括持续将丰富的自然资源转换为合成气以生产高价值电力、燃料和化学品的气化专案。"
			},
			{
				modal: "partners05",
				title: "汉唐集成股份有限公司",
				title_en: "UIS(United Integrated Service)",
				abstract: "	汉唐集成是一个以「全面性整合服务」方式提供工程建设的公司。该公司提供高科技产业建厂之系统集成设计与建造的需求。"
			},
			{
				modal: "partners06",
				title: "洋基工程股份有限公司",
				title_en: "Yankey Engineering Co.,LTD.",
				abstract: "洋基工程成立于1980年，早年专注于食品厂冷冻技术的研发与规划，随着台湾经济起飞的脉动转型，于1985年正式跨足电子产业，一路到现今的面板、太阳能、半导体、光学、面板、生技等等产业。"
			},
			{
				modal: "partners07",
				title: "台湾村田机械股份有限公司",
				title_en: "Murata Machinery, Ltd.",
				abstract: "村田机械的主要产品是工业机械，如纺织机械，车床机械，钣金机械和通讯设备，如数字多功能产品。此外，村田机械还提供以自动化存储和自动化运输系统为中心的工厂自动化和物流系统，以及为半导体晶圆厂设计的无尘室自动化材料处理系统。"
			},
			{
				modal: "partners08",
				title: "日月光投资控股股份有限公司",
				title_en: "ASE Technology Holding Co., Ltd.",
				abstract: "日月光投控为全球领先半导体封装与测试制造服务公司，提供半导体客户包括晶片前段测试及晶圆针测至后段封装、材料及成品测试的一元化服务。结合专业电子代工制造服务的环电公司，提供完善的电子制造整体解决方案，以卓越技术及创新思维服务半导体、电子与数位科技市场。"
			},
			{
				modal: "partners09",
				title: "亚翔工程股份有限公司",
				title_en: "L&K Engineering Co.,Ltd",
				abstract: "1978年亚翔工程公司成立，跟随台湾工业的脉动，历经实验室工程、化学制药厂、光电及半导体电子工业的整厂机电工程与无尘室工程，顺应时空背景的转变，调整经营观念、开发新技术。"
			},
			{
				modal: "partners10",
				title: "沃亚科技股份有限公司",
				title_en: "Weltall Technology Corporation ",
				abstract: "沃亚科技不仅仅是仪器设备代理商，更是系统整合服务商，所提供的服务包含提供各式分析仪、监测系统规划设计、数据图控软体、系统整合测试、现场管线施工、系统操作教育训练及定期保养维护等售后服务。"
			},
			{
				modal: "partners11",
				title: "兆联实业股份有限公司",
				title_en: "Mega Union Technology Inc. ",
				abstract: "兆联实业成立于2005年，为专业之超纯水及废水回收系统规划设计 之工程公司，同时提供Polish树脂再生、RO清洗服务、系统营运相关耗材租赁、化学品等与用水相关衍生之各项服务。"
			},
			{
				modal: "partners12",
				title: "蓝鸟集团",
				title_en: "BLUEBIRDME",
				abstract: "上海蓝鸟机电有限公司是一家信息自动化的创新服务商，是专门致力于工业信息自动化解决方案的服务、技术研究、应用软件开发的高科技公司。"
			},
			{
				modal: "partners13",
				title: "帝商科技",
				title_en: "REGAL SCAN TECH",
				abstract: "帝商科技自1994成立，提供AIDC(自动辨识及资料收集)系统整合服务于台湾/大陆的各行各业。帝商产品包含条码扫描器、条码标签列印机、Android PDA、RFID读取设备、门禁系统......等等。"
			},
			{
				modal: "partners14",
				title: "博世",
				title_en: "BOSCH*(Robert Bosch GmbH)",
				abstract: "罗伯特·博世有限公司，俗称博世、BOSCH，是一家德国跨国公司 的工程和技术公司，总部设在格林根。博世的核心运营领域横跨四个业务部门：移动性（硬件和软件），消费品（包括家用电器和电动工具），工业技术（包括驱动和控制）以及能源和建筑技术。"
			},
			{
				modal: "partners15",
				title: "安迅士",
				title_en: "AXIS(Axis Communications AB)",
				abstract: "AXIS创立于西元1984年，安讯士网络通讯公司是一家总部位于瑞典，专业提供与实施网络视频解决方案的 IT 公司。"
			},
			
			{
				modal: "partners16",
				title: "研华科技",
				title_en: "ADVANTECH（Advantech Co., Ltd.）",
				abstract: "研华股份有限公司，简称研华或研华科技，是台湾一家工业自动化设备公司，目前工业电脑（IPC）市占率世界排名第一。 2018年获评为台湾品牌价值第五名。"
			},
			{
				modal: "partners17",
				title: "汉军科技",
				title_en: "HUNDURE",
				abstract: "汉军科技股份有限公司成立于1989年，由富有安防产业经验之团队所共同创办。研发各式RFID辨识系统、考勤机、门禁产品、读卡机、指纹机、以及周边配备。 "
			},
			{
				modal: "partners18",
				title: "Genetec",
				title_en: "Genetec",
				abstract: "Genetec总部位于加拿大魁北克省蒙特利尔，而办公地点遍及全球：墨西哥城，圣保罗，杜塞尔多夫，巴黎，迪拜，东京和新加坡。"
			},
			{
				modal: "partners19",
				title: "精技電腦",
				title_en: "unitech(Unitech Computer Co., Ltd.)",
				abstract: "精技电脑股份有限公司在1979年3月成立，初期以应用微处理器提供顾客自动化系统为主要业务， 四十几年来一直持续专注于「提供能提升客户生产力的资讯产品及服务」。"
			},
			{
				modal: "partners20",
				title: "美国泰科国际有限公司简介",
				title_en: "TYCO(Tyco International)",
				abstract: "泰科国际有限公司（Tyco International Ltd.）创建于1960年，泰科国际是一家多元化的生产与服务型企业。泰科是世界最大的电气、电子元件制造商和服务商。"
			},
			{
				modal: "partners21",
				title: "日本電氣",
				title_en: "NEC(NEC Corporation)",
				abstract: "日本电气，简称日电、NEC，是日本一家跨国资讯科技公司，总部位于东京都港区。 NEC是住友集团的成员。它的经营范围主要分成三个部分：IT解决方案、网路解决方案和电子装置。"
			},
			{
				modal: "partners22",
				title: "MOXA",
				title_en: "",
				abstract: "MOXA是一个全球顶尖的设备连网产品供应商。 MOXA为系统整合商和加值转销商持续提供世界级的工业级网路产品。"
			},
			{
				modal: "partners23",
				title: "茂旭",
				title_en: "SOYAL",
				abstract: "茂旭资讯股份有限公司是一家享誉业内、稳健发展的门禁控制生产企业，成立于1993年，初期是以客户委托设计门禁产品为主，由于研发的稳定性及功能性大受市场好评，满足门禁产业的需求。"
			},
			
			{
				modal: "partners24",
				title: "Wonderware",
				title_en: "Wonderware",
				abstract: "Wonderware是一个工业软件品牌，现在由Aveva拥有，并以AVEVA名称重新命名。 Wonderware是Invensys plc的一部分，Invensys plc于2014年1月被Schneider Electric收购。"
			},
			{
				modal: "partners25",
				title: "思科系统",
				title_en: "cisco(Cisco Systems, Inc.)",
				abstract: "思科系统成立于1984年，是一间跨国际综合技术企业，总部设于加州矽谷。思科开发、制作和售卖网路硬体、软体、通讯装置等高科技产品及服务，并透过子公司（例子有OpenDNS、Webex、Jasper）打入其他科技市场。"
			},
			{
				modal: "partners26",
				title: "泓格科技",
				title_en: "ICP DAS",
				abstract: "	泓格科技成立于1993年，泓格科技一直致力于发展远端I/O控制器、分散式I/O模组、I/O资料撷取卡，拥有完整的工业自动化解决方案及完善的售后服务，近年来更积极发展可程式自动化控制器、网际网路相关产品及运动控制系统等一系列产品。"
			},
			{
				modal: "partners27",
				title: "DELL",
				title_en: "DELL(Dell Inc.)",
				abstract: "戴尔股份有限公司以生产、设计、销售家用以及办公室电脑而闻名，不过它同时也涉足高阶电脑市场，生产与销售伺服器、资料储存装置或网路装置等。"
			},
			{
				modal: "partners28",
				title: "惠烈－普克公司(简称「惠普」)",
				title_en: "HP(Hewlett-Packard Company) ",
				abstract: "惠烈－普克公司是一间总部设在美国加州帕罗奥图的跨国科技公司。惠普公司主要研发，生产和销售笔记型电脑、一体机、桌上型电脑、平板电脑、智慧型手机、行动网路、扫描器、列印与耗材、投影机、数位产品、电脑周边、智慧型电视和服务产品。"
			},
			
			
			
					
				],
		partners_item_en:[
			{
				modal: "partners01",
				title: "Cica-Huntek",
				title_en: "Cica-Huntek Chemical Technology Taiwan Co., Ltd.",
				abstract: "Dedicated in Development and Design of Chemical Supply Systems, Cica-Huntek Chemical Technology Taiwan Co., Ltd. has achieved significant achievements in the high-end electronic manufacturing industry including IC Circuitry, photoelectric products (TFT LCD, LED, OLED), PV, as well as packaging and testing facilities, and is highly acknowledged by customers."
			},
			{
				modal: "partners02",
				title: "MIC",
				title_en: "Marketech International Corp",
				abstract: "Marketech International Corp is committed to be the professional technology service provider dedicated to marketing and technology integration support services."
			},
			{
				modal: "partners03",
				title: "Lumax",
				title_en: "Lumax International Corp., Ltd.",
				abstract: "	Lumax's strengths lie in its being the only professional firm in Taiwan that has extended its reach across two fields: process control and electronics/telecommunication."
			},
			
			{
				modal: "partners04",
				title: "Air Products",
				title_en: "Air Products and Chemicals, Inc.",
				abstract: "Air Products has been investing in and supplying industrial and specialty gases and related equipment to Taiwan since 1987. The company serves a broad range of industries including electronics, semiconductors, flat panel display, petrochemicals and metal fabrication. "
			},
			{
				modal: "partners05",
				title: "UIS",
				title_en: "United Integrated Service",
				abstract: "	United Integrated Services Co., Ltd is a multidisciplinary engineering and construction company that is capable of overall systems coordination. Its scope of services include engineering consulting, high-tech factory planning and delivery in which clean-room systems, HVAC, electrical systems,instrumentation and control,process utilities, telecommunication systems and tool hook-up are all vital parts in need of total coordination. "
			},
			{
				modal: "partners06",
				title: "Yankey",
				title_en: "Yankey Engineering Co.,LTD.",
				abstract: "Established in 1980. As Taiwan's economy boosted and upgraded by time, in 1985 Yankey officially expanded it's business scope to Electronics Industry field, then to Panel, Solar Power, Semiconductor, Photoelectric, Biotech Industry fields, etc."
			},
			{
				modal: "partners07",
				title: "Murata Machinery",
				title_en: "Murata Machinery, Ltd.",
				abstract: "The company's main products are industrial machines such as textile machinery, turning machines, sheet metal machinery and communication equipment like digital multifunctional products. In addition, Murata Machinery provides factory automation and logistics systems centering on the automated storage and automated transportation systems, and also automated material handling systems for clean rooms designed for semiconductor fabs."
			},
			{
				modal: "partners08",
				title: "ASE",
				title_en: "ASE Technology Holding Co., Ltd.",
				abstract: "ASE Technology Holding is the leading provider of semiconductor manufacturing services in assembly and test. The Company develops and offers complete turnkey solutions covering front-end engineering test, wafer probing and final test, as well as IC packaging, materials and electronic manufacturing services through USI with superior technologies, breakthrough innovations, and advanced development programs. "
			},
			{
				modal: "partners09",
				title: "L&K",
				title_en: "L&K Engineering Co.,Ltd",
				abstract: "L&K Engineering Company has evolved from a traditional building and laboratory air condition design and installation company, then becoming a pharmaceutical cleanroom and whole plant design / installation service provider, finally to a competitive local cleanroom constructor in high-tech semiconductor industry. "
			},
			{
				modal: "partners10",
				title: "Weltall",
				title_en: "Weltall Technology Corporation ",
				abstract: "Weltall is not just an equipment distributor. Weltall is integrated system service provider, It provides Various Analyzer Equipment, the monitor system plan design, the data chart controls the software, the System Conformity Test, the Scene Pipeline Construction, the System Operation Education and Training, the Periodic Maintenance and so on the post-sale service. "
			},
			{
				modal: "partners11",
				title: "Mega Union Technology Inc. ",
				title_en: "",
				abstract: "Mega Union is a turnkey base engineering firm in Taiwan.It provides Ultra Pure Water,wastewater and reclaim system design,constraction,commissioning,spare parts, Reverse Osmosis Mernbrane off-site cleaning,polish resin regeneration service are also its supply scope."
			},
			{
				modal: "partners12",
				title: "BLUEBIRDME",
				title_en: "Xian Bluebirdme Automation Co., Ltd",
				abstract: "Shanghai Bluebird Electromechanical Co., Ltd., which is an innovative service provider of information automation, is a high-tech company dedicated to the service, technical research and application software development about industrial information automation solutions."
			},
			{
				modal: "partners13",
				title: "REGAL SCAN TECH",
				title_en: "",
				abstract: "REGAL SCAN TECH, which was established in 1994, providing AIDC (Automatic Identification and Data Collection) system integration services for various industries in Taiwan/Mainland. Its products include barcode scanners, barcode label printers, Android PDAs, RFID reading devices, access control systems, etc."
			},
			{
				modal: "partners14",
				title: "BOSCH",
				title_en: "Robert Bosch GmbH",
				abstract: "Robert Bosch GmbH, commonly known as Bosch, is a German multinational engineering and technology company headquartered in Gerlingen. Bosch's core operating areas are spread across four business sectors: mobility (hardware and software), consumer goods (including household appliances and power tools), industrial technology (including drive and control) and energy and building technology."
			},
			{
				modal: "partners15",
				title: "AXIS",
				title_en: "Axis Communications AB",
				abstract: "Axis Communications originally started out as an IT company selling print servers. Axis Communications AB is a Swedish manufacturer of network cameras for the physical security and video surveillance industries."
			},
			
			{
				modal: "partners16",
				title: "研华科技",
				title_en: "ADVANTECH（Advantech Co., Ltd.）",
				abstract: "Advantech's corporate vision is to enable an intelligent planet. The company is a global leader in the fields of IoT intelligent systems and embedded platforms.。"
			},
			{
				modal: "partners17",
				title: "HUNDURE",
				title_en: "",
				abstract: "Founded in Taiwan in 1989, Hundure Technologies has been acknowledged as one of the major design and manufacturing companies in the access control field for years."
			},
			{
				modal: "partners18",
				title: "Genetec",
				title_en: "",
				abstract: "While Genetec's headquarters are in Montreal, Quebec, Canada, Its office locations span the globe: Mexico City, Sao Paolo, Dusseldorf, Paris, Dubai, Tokyo, and Singapore."
			},
			{
				modal: "partners19",
				title: "unitech",
				title_en: "Unitech Computer Co., Ltd.",
				abstract: "Jing Technology Computer Co., Ltd. was established in March 1979. At the beginning of its establishment, its business mainly used microprocessors to provide customer automation systems. For more than 40 years, it has been committed to 'providing information products and services that improve customer productivity.'"
			},
			{
				modal: "partners20",
				title: "TYCO",
				title_en: "Tyco International",
				abstract: "Tyco International plc was a security systems company incorporated in the Republic of Ireland, with operational headquarters in Princeton, New Jersey, United States (Tyco International (US) Inc.). Tyco International was composed of two major business segments: security solutions and fire protection."
			},
			{
				modal: "partners21",
				title: "NEC",
				title_en: "NEC Corporation",
				abstract: "NEC Corporation is a Japanese multinational information technology and electronics company, headquartered in Minato, Tokyo. It provides IT and network solutions, including cloud computing, AI, IoT platform, and telecommunications equipment and software."
			},
			{
				modal: "partners22",
				title: "MOXA",
				title_en: "MOXA",
				abstract: "Moxa is a world-leading supplier of equipment networking products.Moxa not only as a system integrator but as a value-added reseller. It continues to provide the best industrial network products."
			},
			{
				modal: "partners23",
				title: "SOYAL",
				title_en: "SOYAL",
				abstract: "Established in 1993, SOYAL Technology Co., Ltd has been the most renowned access control manufacture in Taiwan which was first commissioned to design products satisfying our clients' demands and then became favorably appreciated by the market for its dependability and applicability."
			},
			
			{
				modal: "partners24",
				title: "Wonderware",
				title_en: "Wonderware",
				abstract: "Wonderware was a brand of industrial software now owned by Aveva and rebranded under the AVEVA name.The Wonderware software now under the AVEVA name is used in various industries, including: Automotive Assembly, Facilities Management, Food and Beverage, CPG, Mining and Metals, Power, Oil and Gas, Chemicals, Energy, Water and Wastewater."
			},
			{
				modal: "partners25",
				title: "Cisco",
				title_en: "Cisco Systems, Inc.",
				abstract: "Cisco Systems, Inc. is an American multinational technology conglomerate headquartered in San Jose, California, in the center of Silicon Valley. Cisco develops, manufactures and sells networking hardware, software, telecommunications equipment and other high-technology services and products. Through its numerous acquired subsidiaries, such as OpenDNS, Webex, Jabber and Jasper, Cisco specializes in specific tech markets, such as the Internet of Things (IoT), domain security and energy management. "
			},
			{
				modal: "partners26",
				title: "ICP DAS",
				title_en: "",
				abstract: "	ICP DAS, established in 1993, focuses on innovation and improving the industrial automation technology.ICP DAS strives for advanced remote I/O controllers, distributed I/O modules, and I/O data acquisition boards."
			},
			{
				modal: "partners27",
				title: "DELL",
				title_en: "Dell Inc.",
				abstract: "Dell is an American multinational computer technology company that develops, sells, repairs, and supports computers and related products and services. It is one of the biggest PC product companies in the world."
			},
			{
				modal: "partners28",
				title: "HP",
				title_en: "Hewlett-Packard Company ",
				abstract: "HP specialized in developing and manufacturing computing, data storage, and networking hardware, designing software and delivering services. Major product lines included personal computing devices, enterprise and industry standard servers, related storage devices, networking products, software and a diverse range of printers and other imaging products. HP also offered services and a consulting business for its products and partner products."
			},
			
			
			
					
				],
			};
			var vm2 = new Vue({
            el: '#clients',
			data: partners_tw
        });
			var vm3 = new Vue({
				el:"#partners",
				data: partners_tw
			});
var client_factory1 = {
	client_tw:[
		{
			area: "年份",
            name: "建置合約",
		},
		{
			area: "2020-(F16)",
            name: "FOR TOOL ALARM 機台自動發簡訊通知SPONSOR 與主管",
		},
		{
			area: "2020-(F16)",
            name: "IE_工程_ARMS系統",
		},
		{
			area: "2020-(F10)",
            name: "Tool sign off E化",
		},
		{
			area: "2019-(F10)",
            name: "C_*_N_ISEP網站維護和KPI子系統開發工程",
		},
		{
			area: "2019-(F16)",
            name: "F16P1 ACS ROOM 位移測試安裝功能需求",
		},
		{
			area: "2019-(F16)",
            name: "廠務中央庫房Barcode系統",
		},
		{
			area: "2019-(F16)",
            name: "通關門工程+CCTV",
		},
		{
			area: "2019-(F15P12)",
            name: "空氣品質偵測",
		},
		{
			area: "2018-(F16)",
            name: "一般_劇毒易制爆化學品管理平台",
		},
		{
			area: "2018-(F14P3)",
            name: "人員耗材供應系統",
		},
		{
			area: "2018-(F12AB)",
            name: "防闖安全強化需求(新竹廠)",
		},
		{
			area: "2017-(F12P4)",
            name: "超速測速器工程",
		},
		{
			area: "2012",
            name: "門禁管理系統改建案(EMS)",
		},
		{
			area: "2009",
            name: "工地門禁系統",
		},
		{
			area: "2007",
            name: "氣瓶櫃更換系統",
		},
		{
			area: "2006",
            name: "水資源平台系統建置案",
		}
		
		
	],
	client_cn:[
		{
			area: "时间/廠區",
            name: "建置合约",
		},
		{
			area: "2020-(F16)",
            name: "FOR TOOL ALARM 机台自动发简讯通知SPONSOR 与主管",
		},
		{
			area: "2020-(F16)",
            name: "IE_工程_ARMS系统",
		},
		{
			area: "2020-(F10)",
            name: "Tool sign off E化",
		},
		{
			area: "2019-(F10)",
            name: "C_*_N_ISEP网站维护和KPI子系统开发工程",
		},
		{
			area: "2019-(F16)",
            name: "F16P1 ACS ROOM 位移测试安装功能需求",
		},
		{
			area: "2019-(F16)",
            name: "厂务中央库房Barcode系统",
		},
		{
			area: "2019-(F16)",
            name: "通关门工程+CCTV",
		},
		{
			area: "2019-(F15P12)",
            name: "空气品质侦测",
		},
		{
			area: "2018-(F16)",
            name: "F16P1_ISEP_一般_剧毒易制爆化学品管理平台",
		},
		{
			area: "2018",
            name: "人员耗材供应系统",
		},
		{
			area: "2018",
            name: "防闯安全强化需求(新竹厂)",
		},
		{
			area: "2017",
            name: "超速测速器工程",
		},
		{
			area: "2012",
            name: "门禁管理系统改建案(EMS)",
		},
		{
			area: "2009",
            name: "工地门禁系统",
		},
		{
			area: "2007",
            name: "气瓶柜更换系统",
		},
		{
			area: "2006",
            name: "水资源平台系统建置案",
		}
		
		
	],
	client_en:[
		{
			area: "Years",
            name: "Project",
		},
		{
			area: "2020-(F16)",
            name: "For the tool alarm, it will automatically send SMS to notify the sponsor and supervisor",
		},
		{
			area: "2020-(F16)",
            name: "IE_Engineering_ARMS System",
		},
		{
			area: "2020-(F10)",
            name: "E-Tool sign off",
		},
		{
			area: "2019-(F10)",
            name: "C_*_N_ISEP Website maintenance and KPI subsystem development project",
		},
		{
			area: "2019-(F16)",
            name: "F16P1 ACS ROOM displacement test installation function requirements",
		},
		{
			area: "2019-(F16)",
            name: "Factory Central Warehouse Barcode System",
		},
		{
			area: "2019-(F16)",
            name: "Speed Gate Engineering +CCTV",
		},
		{
			area: "2019-(F15P12)",
            name: "Air Quality Detection",
		},
		{
			area: "2018-(F16)",
            name: "F16P1_ISEP_General_Highly toxic and explosive chemicals management platform",
		},
		{
			area: "2018",
            name: "Personnel Supplies Supply System",
		},
		{
			area: "2018",
            name: "Enhanced Anti-vandal Safety Requirements (Hsinchu Plant)",
		},
		{
			area: "2017",
            name: "Speed-measuring Engineering",
		},
		{
			area: "2012",
            name: "Acess Control System(EMS)",
		},
		{
			area: "2009",
            name: "Site access control system",
		},
		{
			area: "2007",
            name: "Cylinder Cabinet Replacement System",
		},
		{
			area: "2006",
            name: "Water resources platform system construction project",
		}
		
		
	],
};
	var vm_tsmc = new Vue({
		el: '#client-tsmc',
		data: client_factory1
        });
var client_factory2 = {
	client_tw:[
		{
			area: "年份/客戶",
            name: "建置合約",
		},
		{
			area: "2015-(三廠)",
            name: "SPC 資料整合(DVI)平台",
		},
		{
			area: "2014-(二廠)",
            name: "SPC 資料整合(DVI)平台",
		},
		{
			area: "2010-(二廠)",
            name: "Alarm Collection and Auto Callout 平台系統",
		}	
	],
	client_cn:[
		{
			area: "时间/客户",
            name: "建置合约",
		},
		{
			area: "2015-(三厂)",
            name: "SPC 资料整合(DVI)平台",
		},
		{
			area: "2014-(二厂)",
            name: "SPC 资料整合(DVI)平台",
		},
		{
			area: "2010-(二厂)",
            name: "Alarm Collection and Auto Callout 平台系统",
		}	
	],
	client_en:[
		{
			area: "Years/Client",
            name: "Project",
		},
		{
			area: "2015-(Fab3)",
            name: "SPC Data Integration (DVI) Platform",
		},
		{
			area: "2014-(Fab2)",
            name: "SPC Data Integration (DVI) Platform",
		},
		{
			area: "2010-(Fab2)",
            name: "Alarm Collection and Auto Callout Platform System",
		}	
	],
};
	var vm_factory2 = new Vue({
		el: '#client-fac2',
		data: client_factory2
        });
var client_factory3 = {
	client_tw:[
		{
			area: "年份/客戶",
            name: "建置合約",
		},
		{
			area: "2006-彰化縣衛生局",
            name: "癌症防治及結核病防治績效管理資訊系統建置案",
		},
		{
			area: "2004-基隆市衛生局",
            name: "X光巡檢資資訊管理",
		}
		
	],
	client_cn:[
		{
			area: "时间/客户",
            name: "建置合约",
		},
		{
			area: "2006-彰化县卫生局",
            name: "癌症防治及结核病防治绩效管理资讯系统建置案",
		},
		{
			area: "2004-基隆市卫生局",
            name: "X光巡检资资讯管理",
		}
		
	],
	client_en:[
		{
			area: "Years/Client",
            name: "Project",
		},
		{
			area: "2006-Changhua County Health Bureau",
            name: "Cancer Prevention and Tuberculosis Prevention Performance Management Information System Construction Project",
		},
		{
			area: "2004-Keelung City Health Bureau",
            name: "X-ray inspection information management",
		}
		
	],
};
	var vm_factory3 = new Vue({
		el: '#client-fac3',
		data: client_factory3
        });
var client_factory4 = {
	client_tw:[
		{
			area: "年份/客戶",
            name: "建置合約",
		},
		{
			area: "2020-鵬鼎控股-印度",
            name: "靜電測試儀",
		},
		{
			area: "2020-鵬鼎控股-秦皇島",
            name: "靜電測試儀",
		},
		{
			area: "2020-鵬鼎控股-淮安",
            name: "靜電測試儀",
		},
		{
			area: "2020-龍勝濤",
            name: "電視看版系統建置(硬件)\n電視看版系統建置(軟件)",
		},
		{
			area: "2018-京隆科技",
            name: "宿舍 G棟1～8樓門禁設備建置\n宿舍 G棟1～8樓門禁建置施工\n11個門禁新增工程\n一組ESD三輥閘機（含安裝調試）工程\n通關機一組（含安裝調試）工程\n新增5門禁工程For KLT二廠海思擴充\nCOG物料間新增1間門禁（閘道)\n新增 1個門禁工程For MTK半成品倉新 擴隔間",
		},
		{
			area: "2018-采鈺科技",
            name: "空污及水污之簡訊系統與發報系統(ETS)",
		},
		{
			area: "2018-鵬鼎控股",
            name: "門禁&消費系統改建",
		},
		{
			area: "2018-臺灣觀光學院",
            name: "選課管理系統",
		},
		{
			area: "2017-麗明營造股份有限公司",
            name: "土方車GPS監測系統",
		},
		{
			area: "2016-遠巧",
            name: "QC系統",
		},
		{
			area: "2018-臺灣篩檢學會",
            name: "網站改版系統",
		},
		{
			area: "2011-奇美電子(現改為群創)",
            name: "人力資源部人資入口網「eHR」",
		},
		{
			area: "2009-泛太建經",
            name: "履約保證系統",
		},
		{
			area: "2004-交通部運研所港灣研究中心",
            name: "港灣環境資訊網系統",
		}
	],
	client_cn:[
		{
			area: "时间/客户",
            name: "建置合约",
		},
		{
			area: "2020-鹏鼎控股-印度",
            name: "静电测试仪",
		},
		{
			area: "2020-鹏鼎控股-秦皇岛",
            name: "静电测试仪",
		},
		{
			area: "2020-鹏鼎控股-淮安",
            name: "静电测试仪",
		},
		{
			area: "2020-龙胜涛",
            name: "电视看版系统建置(硬件)\n电视看版系统建置(软件)",
		},
		{
			area: "2018-京隆科技",
            name: "宿舍G栋1～8楼门禁设备建置\n宿舍G栋1～8楼门禁建置施工\n11个门禁新增工程\n一组ESD三辊闸机（含安装调试）工程\ n通关机一组（含安装调试）工程\n新增5门禁工程For KLT二厂海思扩充\nCOG物料间新增1间门禁（闸道)\n新增1个门禁工程For MTK半成品仓新扩隔间",
		},
		{
			area: "2018-采钰科技",
            name: "空污及水污之简讯系统与发报系统(ETS)",
		},
		{
			area: "2018-鹏鼎控股",
            name: "门禁&消费系统改建",
		},
		{
			area: "2018-台湾观光学院",
            name: "选课管理系统",
		},
		{
			area: "2017-丽明营造股份有限公司",
            name: "土方车GPS监测系统",
		},
		{
			area: "2016-远巧",
            name: "QC系统",
		},
		{
			area: "2018-台湾筛检学会",
            name: "网站改版系统",
		},
		{
			area: "2011-奇美电子(现改为群创)",
            name: "人力资源部人资入口网「eHR」",
		},
		{
			area: "2009-泛太建经",
            name: "履约保证系统",
		},
		{
			area: "2004-交通部运研所港湾研究中心",
            name: "港湾环境资讯网系统",
		}
	],
	client_en:[
		{
			area: "Years/Client",
            name: "Project",
		},
		{
			area: "2020-Avary Holiding-India",
            name: "E.S.D Control System",
		},
		{
			area: "2020-Avary Holiding-Qinhuangdao",
            name: "E.S.D Control System",
		},
		{
			area: "2020-Avary Holiding-Huaian",
            name: "E.S.D Control System",
		},
		{
			area: "2020-龍勝濤",
            name: "TV billboard system construction(hardware) \nTV billboard system construction(software)",
		},
		{
			area: "2018-King Long Technology Limited(KIT)",
            name: "Construction of access control equipment on floors 1-8 of dormitory G building \nInstall access control equipment on the 1st to 8th floors of Building G \n11 new access control items \nA set of ESD three-roll gate (including installation and commissioning) project \nA set of power on/off (including installation and commissioning) items\nAdd 5 access control items for HiSilicon expansion of KLT second plant \nAdd 1 access control (gateway) to the COG data room \nAdd 1 access control item to the new extension area of MTK semi-finished product warehouse",
		},
		{
			area: "2018-VisEra",
            name: "Air Pollution and Water Pollution SMS & Notification System (ETS)",
		},
		{
			area: "2018-Avary Holiding",
            name: "Access Control & Consumer System Reconstruction",
		},
		{
			area: "2018-The Culinary Institute of Taiwan",
            name: "Course Management System",
		},
		{
			area: "2017-Best-giving",
            name: "Earthmoving Truck GPS Monitoring System",
		},
		{
			area: "2016-Farsmart",
            name: "QC System",
		},
		{
			area: "2016-Taiwan Association of Medical Screening",
            name: "Website Revision System",
		},
		{
			area: "2011- CMO (Now Innolux)",
            name: "Human Resources Department(eHR)",
		},
		{
			area: "2009-Fantai",
            name: "Real Rstate Escrow system",
		},
		{
			area: "2004-Habor & Marine Technology Center",
            name: "Habor Environment Information Website System",
		}
		
	],
};
	var vm_factory4 = new Vue({
		el: '#client-fac4',
		data: client_factory4
        });
var client_factory5 = {
	client_tw:[
		{
			area: "年份/客戶",
            name: "建置合約",
		},
		{
			area: "2018-京隆科技",
            name: "宿舍 G棟1～8樓門禁設備建置",
		},
		{
			area: "2018-京隆科技",
            name: "宿舍 G棟1～8樓門禁建置施工",
		},
		{
			area: "2018-京隆科技",
            name: "11個門禁新增工程",
		},
		{
			area: "2018-京隆科技",
            name: "一組ESD三輥閘機（含安裝調試）工程",
		},
		{
			area: "2018-京隆科技",
            name: "通關機一組（含安裝調試）工程",
		},
		{
			area: "2018-京隆科技",
            name: "新增5門禁工程For KLT二廠海思擴充",
		},
		{
			area: "2018-京隆科技",
            name: "COG物料間新增1間門禁（閘道）",
		},
		{
			area: "2018-京隆科技",
            name: "新增 1個門禁工程For MTK半成品倉新 擴隔間",
		}
	],
};
	var vm_factory5 = new Vue({
		el: '#client-fac5',
		data: client_factory5
        });