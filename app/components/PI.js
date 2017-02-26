
const piString = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900994657640789512694683983525957098258226205224894077267194782684826014769909026401363944374553050682034962524517493996514314298091906592509372216964615157098583874105978859597729754989301617539284681382686838689427741559918559252459539594310499725246808459872736446958486538367362226260991246080512438843904512441365497627807977156914359977001296160894416948685558484063534220722258284886481584560285060168427394522674676788952521385225499546667278239864565961163548862305774564980355936345681743241125150760694794510965960940252288797108931456691368672287489405601015033086179286809208747609178249385890097149096759852613655497818931297848216829989487226588048575640142704775551323796414515237462343645428584447952658678210511413547357395231134271661021359695362314429524849371871101457654035902799344037420073105785390621983874478084784896833214457138687519435064302184531910484810053706146806749192781911979399520614196634287544406437451237181921799983910159195618146751426912397489409071864942319615679452080951465502252316038819301420937621378559566389377870830390697920773467221825625996615014215030680384477345492026054146659252014974428507325186660021324340881907104863317346496514539057962685610055081066587969981635747363840525714591028970641401109712062804390397595156771577004203378699360072305587631763594218731251471205329281918261861258673215791984148488291644706095752706957220917567116722910981690915280173506712748583222871835209353965725121083579151369882091444210067510334671103141267111369908658516398315019701651511685171437657618351556508849099898599823873455283316355076479185358932261854896321329330898570642046752590709154814165498594616371802709819943099244889575712828905923233260972997120844335732654893823911932597463667305836041428138830320382490375898524374417029132765618093773444030707469211201913020330380197621101100449293215160842444859637669838952286847831235526582131449576857262433441893039686426243410773226978028073189154411010446823252716201052652272111660396665573092547110557853763466820653109896526918620564769312570586356620185581007293606598764861179104533488503461136576867532494416680396265797877185560845529654126654085306143444318586769751456614068007002378776591344017127494704205622305389945613140711270004078547332699390814546646458807972708266830634328587856983052358089330657574067954571637752542021149557615814002501262285941302164715509792592309907965473761255176567513575178296664547791745011299614890304639947132962107340437518957359614589019389713111790429782856475032031986915140287080859904801094121472213179476477726224142548545403321571853061422881375850430633217518297986622371721591607716692547487389866549494501146540628433663937900397692656721463853067360965712091807638327166416274888800786925602902284721040317211860820419000422966171196377921337575114959501566049631862947265473642523081770367515906735023507283540567040386743513622224771589150495309844489333096340878076932599397805419341447377441842631298608099888687413260472156951623965864573021631598193195167353812974167729478672422924654366800980676928238280689964004824354037014163149658979409243237896907069779422362508221688957383798623001593776471651228935786015881617557829735233446042815126272037343146531977774160319906655418763979293344195215413418994854447345673831624993419131814809277771038638773431772075456545322077709212019051660962804909263601975988281613323166636528619326686336062735676303544776280350450777235547105859548702790814356240145171806246436267945612753181340783303362542327839449753824372058353114771199260638133467768796959703098339130771098704085913374641442822772634659470474587847787201927715280731767907707157213444730605700733492436931138350493163128404251219256517980694113528013147013047816437885185290928545201165839341965621349143415956258658655705526904965209858033850722426482939728584783163057777560688876446248246857926039535277348030480290058760758251047470916439613626760449256274204208320856611906254543372131535958450687724602901618766795240616342522577195429162991930645537799140373404328752628889639958794757291746426357455254079091451357111369410911939325191076020825202618798531887705842972591677813149699009019211697173727847684726860849003377024242916513005005168323364350389517029893922334517220138128069650117844087451960121228599371623130171144484640903890644954440061986907548516026327505298349187407866808818338510228334508504860825039302133219715518430635455007668282949304137765527939751754613953984683393638304746119966538581538420568533862186725233402830871123282789212507712629463229563989898935821167456270102183564622013496715188190973038119800497340723961036854066431939509790190699639552453005450580685501956730229219139339185680344903982059551002263535361920419947455385938102343955449597783779023742161727111723643435439478221818528624085140066604433258885698670543154706965747458550332323342107301545940516553790686627333799585115625784322988273723198987571415957811196358330059408730681216028764962867446047746491599505497374256269010490377819868359381465741268049256487985561453723478673303904688383436346553794986419270563872931748723320837601123029911367938627089438799362016295154133714248928307220126901475466847653576164773794675200490757155527819653621323926406160136358155907422020203187277605277219005561484255518792530343513984425322341576233610642506390497500865627109535919465897514131034822769306247435363256916078154781811528436679570611086153315044521274739245449454236828860613408414863776700961207151249140430272538607648236341433462351897576645216413767969031495019108575984423919862916421939949072362346468441173940326591840443780513338945257423995082965912285085558215725031071257012668302402929525220118726767562204154205161841634847565169998116141010029960783869092916030288400269104140792886215078424516709087000699282120660418371806535567252532567532861291042487761825829765157959847035622262934860034158722980534989650226291748788202734209222245339856264766914905562842503912757710284027998066365825488926488025456610172967026640765590429099456815065265305371829412703369313785178609040708667114965583434347693385781711386455873678123014587687126603489139095620099393610310291616152881384379099042317473363948045759314931405297634757481193567091101377517210080315590248530906692037671922033229094334676851422144773793937517034436619910403375111735471918550464490263655128162288244625759163330391072253837421821408835086573917715096828874782656995995744906617583441375223970968340800535598491754173818839994469748676265516582765848358845314277568790029095170283529716344562129640435231176006651012412006597558512761785838292041974844236080071930457618932349229279650198751872127267507981255470958904556357921221033346697499235630254947802490114195212382815309114079073860251522742995818072471625916685451333123948049470791191532673430282441860414263639548000448002670496248201792896476697583183271314251702969234889627668440323260927524960357996469256504936818360900323809293459588970695365349406034021665443755890045632882250545255640564482465151875471196218443965825337543885690941130315095261793780029741207665147939425902989695946995565761218656196733786236256125216320862869222103274889218654364802296780705765615144632046927906821207388377814233562823608963208068222468012248261177185896381409183903673672220888321513755600372798394004152970028783076670944474560134556417254370906979396122571429894671543578468788614445812314593571984922528471605049221242470141214780573455105008019086996033027634787081081754501193071412233908663938339529425786905076431006383519834389341596131854347546495569781038293097164651438407007073604112373599843452251610507027056235266012764848308407611830130527932054274628654036036745328651057065874882256981579367897669742205750596834408697350201410206723585020072452256326513410559240190274216248439140359989535394590944070469120914093870012645600162374288021092764579310657922955249887275846101264836999892256959688159205600101655256375678'

const piSpaced = '3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 8214808651 3282306647 0938446095 5058223172 5359408128 4811174502 8410270193 8521105559 6446229489 5493038196 4428810975 6659334461 2847564823 3786783165 2712019091 4564856692 3460348610 4543266482 1339360726 0249141273 7245870066 0631558817 4881520920 9628292540 9171536436 7892590360 0113305305 4882046652 1384146951 9415116094 3305727036 5759591953 0921861173 8193261179 3105118548 0744623799 6274956735 1885752724 8912279381 8301194912 9833673362 4406566430 8602139494 6395224737 1907021798 6094370277 0539217176 2931767523 8467481846 7669405132 0005681271 4526356082 7785771342 7577896091 7363717872 1468440901 2249534301 4654958537 1050792279 6892589235 4201995611 2129021960 8640344181 5981362977 4771309960 5187072113 4999999837 2978049951 0597317328 1609631859 5024459455 3469083026 4252230825 3344685035 2619311881 7101000313 7838752886 5875332083 8142061717 7669147303 5982534904 2875546873 1159562863 8823537875 9375195778 1857780532 1712268066 1300192787 6611195909 2164201989 3809525720 1065485863 2788659361 5338182796 8230301952 0353018529 6899577362 2599413891 2497217752 8347913151 5574857242 4541506959 5082953311 6861727855 8890750983 8175463746 4939319255 0604009277 0167113900 9848824012 8583616035 6370766010 4710181942 9555961989 4676783744 9448255379 7747268471 0404753464 6208046684 2590694912 9331367702 8989152104 7521620569 6602405803 8150193511 2533824300 3558764024 7496473263 9141992726 0426992279 6782354781 6360093417 2164121992 4586315030 2861829745 5570674983 8505494588 5869269956 9092721079 7509302955 3211653449 8720275596 0236480665 4991198818 3479775356 6369807426 5425278625 5181841757 4672890977 7727938000 8164706001 6145249192 1732172147 7235014144 1973568548 1613611573 5255213347 5741849468 4385233239 0739414333 4547762416 8625189835 6948556209 9219222184 2725502542 5688767179 0494601653 4668049886 2723279178 6085784383 8279679766 8145410095 3883786360 9506800642 2512520511 7392984896 0841284886 2694560424 1965285022 2106611863 0674427862 2039194945 0471237137 8696095636 4371917287 4677646575 7396241389 0865832645 9958133904 7802759009 9465764078 9512694683 9835259570 9825822620 5224894077 2671947826 8482601476 9909026401 3639443745 5305068203 4962524517 4939965143 1429809190 6592509372 2169646151 5709858387 4105978859 5977297549 8930161753 9284681382 6868386894 2774155991 8559252459 5395943104 9972524680 8459872736 4469584865 3836736222 6260991246 0805124388 4390451244 1365497627 8079771569 1435997700 1296160894 4169486855 5848406353 4220722258 2848864815 8456028506 0168427394 5226746767 8895252138 5225499546 6672782398 6456596116 3548862305 7745649803 5593634568 1743241125 1507606947 9451096596 0940252288 7971089314 5669136867 2287489405 6010150330 8617928680 9208747609 1782493858 9009714909 6759852613 6554978189 3129784821 6829989487 2265880485 7564014270 4775551323 7964145152 3746234364 5428584447 9526586782 1051141354 7357395231 1342716610 2135969536 2314429524 8493718711 0145765403 5902799344 0374200731 0578539062 1983874478 0847848968 3321445713 8687519435 0643021845 3191048481 0053706146 8067491927 8191197939 9520614196 6342875444 0643745123 7181921799 9839101591 9561814675 1426912397 4894090718 6494231961 5679452080 9514655022 5231603881 9301420937 6213785595 6638937787 0830390697 9207734672 2182562599 6615014215 0306803844 7734549202 6054146659 2520149744 2850732518 6660021324 3408819071 0486331734 6496514539 0579626856 1005508106 6587969981 6357473638 4052571459 1028970641 4011097120 6280439039 7595156771 5770042033 7869936007 2305587631 7635942187 3125147120 5329281918 2618612586 7321579198 4148488291 6447060957 5270695722 0917567116 7229109816 9091528017 3506712748 5832228718 3520935396 5725121083 5791513698 8209144421 0067510334 6711031412 6711136990 8658516398 3150197016 5151168517 1437657618 3515565088 4909989859 9823873455 2833163550 7647918535 8932261854 8963213293 3089857064 2046752590 7091548141 6549859461 6371802709 8199430992 4488957571 2828905923 2332609729 9712084433 5732654893 8239119325 9746366730 5836041428 1388303203 8249037589 8524374417 0291327656 1809377344 4030707469 2112019130 2033038019 7621101100 4492932151 6084244485 9637669838 9522868478 3123552658 2131449576 8572624334 4189303968 6426243410 7732269780 2807318915 4411010446 8232527162 0105265227 2111660396 6655730925 4711055785 3763466820 6531098965 2691862056 4769312570 5863566201 8558100729 3606598764 8611791045 3348850346 1136576867 5324944166 8039626579 7877185560 8455296541 2665408530 6143444318 5867697514 5661406800 7002378776 5913440171 2749470420 5622305389 9456131407 1127000407 8547332699 3908145466 4645880797 2708266830 6343285878 5698305235 8089330657 5740679545 7163775254 2021149557 6158140025 0126228594 1302164715 5097925923 0990796547 3761255176 5675135751 7829666454 7791745011 2996148903 0463994713 2962107340 4375189573 5961458901 9389713111 7904297828 5647503203 1986915140 2870808599 0480109412 1472213179 4764777262 2414254854 5403321571 8530614228 8137585043 0633217518 2979866223 7172159160 7716692547 4873898665 4949450114 6540628433 6639379003 9769265672 1463853067 3609657120 9180763832 7166416274 8888007869 2560290228 4721040317 2118608204 1900042296 6171196377 9213375751 1495950156 6049631862 9472654736 4252308177 0367515906 7350235072 8354056704 0386743513 6222247715 8915049530 9844489333 0963408780 7693259939 7805419341 4473774418 4263129860 8099888687 4132604721 5695162396 5864573021 6315981931 9516735381 2974167729 4786724229 2465436680 0980676928 2382806899 6400482435 4037014163 1496589794 0924323789 6907069779 4223625082 2168895738 3798623001 5937764716 5122893578 6015881617 5578297352 3344604281 5126272037 3431465319 7777416031 9906655418 7639792933 4419521541 3418994854 4473456738 3162499341 9131814809 2777710386 3877343177 2075456545 3220777092 1201905166 0962804909 2636019759 8828161332 3166636528 6193266863 3606273567 6303544776 2803504507 7723554710 5859548702 7908143562 4014517180 6246436267 9456127531 8134078330 3362542327 8394497538 2437205835 3114771199 2606381334 6776879695 9703098339 1307710987 0408591337 4641442822 7726346594 7047458784 7787201927 7152807317 6790770715 7213444730 6057007334 9243693113 8350493163 1284042512 1925651798 0694113528 0131470130 4781643788 5185290928 5452011658 3934196562 1349143415 9562586586 5570552690 4965209858 0338507224 2648293972 8584783163 0577775606 8887644624 8246857926 0395352773 4803048029 0058760758 2510474709 1643961362 6760449256 2742042083 2085661190 6254543372 1315359584 5068772460 2901618766 7952406163 4252257719 5429162991 9306455377 9914037340 4328752628 8896399587 9475729174 6426357455 2540790914 5135711136 9410911939 3251910760 2082520261 8798531887 7058429725 9167781314 9699009019 2116971737 2784768472 6860849003 3770242429 1651300500 5168323364 3503895170 2989392233 4517220138 1280696501 1784408745 1960121228 5993716231 3017114448 4640903890 6449544400 6198690754 8516026327 5052983491 8740786680 8818338510 2283345085 0486082503 9302133219 7155184306 3545500766 8282949304 1377655279 3975175461 3953984683 3936383047 4611996653 8581538420 5685338621 8672523340 2830871123 2827892125 0771262946 3229563989 8989358211 6745627010 2183564622 0134967151 8819097303 8119800497 3407239610 3685406643 1939509790 1906996395 5245300545 0580685501 9567302292 1913933918 5680344903 9820595510 0226353536 1920419947 4553859381 0234395544 9597783779 0237421617 2711172364 3435439478 2218185286 2408514006 6604433258 8856986705 4315470696 5747458550 3323233421 0730154594 0516553790 6866273337 9958511562 5784322988 2737231989 8757141595 7811196358 3300594087 3068121602 8764962867 4460477464 9159950549 7374256269 0104903778 1986835938 1465741268 0492564879 8556145372 3478673303 9046883834 3634655379 4986419270 5638729317 4872332083 7601123029 9113679386 2708943879 9362016295 1541337142 4892830722 0126901475 4668476535 7616477379 4675200490 7571555278 1965362132 3926406160 1363581559 0742202020 3187277605 2772190055 6148425551 8792530343 5139844253 2234157623 3610642506 3904975008 6562710953 5919465897 5141310348 2276930624 7435363256 9160781547 8181152843 6679570611 0861533150 4452127473 9245449454 2368288606 1340841486 3776700961 2071512491 4043027253 8607648236 3414334623 5189757664 5216413767 9690314950 1910857598 4423919862 9164219399 4907236234 6468441173 9403265918 4044378051 3338945257 4239950829 6591228508 5558215725 0310712570 1266830240 2929525220 1187267675 6220415420 5161841634 8475651699 9811614101 0029960783 8690929160 3028840026 9104140792 8862150784 2451670908 7000699282 1206604183 7180653556 7252532567 5328612910 4248776182 5829765157 9598470356 2226293486 0034158722 9805349896 5022629174 8788202734 2092222453 3985626476 6914905562 8425039127 5771028402 7998066365 8254889264 8802545661 0172967026 6407655904 2909945681 5065265305 3718294127 0336931378 5178609040 7086671149 6558343434 7693385781 7113864558 7367812301 4587687126 6034891390 9562009939 3610310291 6161528813 8437909904 2317473363 9480457593 1493140529 7634757481 1935670911 0137751721 0080315590 2485309066 9203767192 2033229094 3346768514 2214477379 3937517034 4366199104 0337511173 5471918550 4644902636 5512816228 8244625759 1633303910 7225383742 1821408835 0865739177 1509682887 4782656995 9957449066 1758344137 5223970968 3408005355 9849175417 3818839994 4697486762 6551658276 5848358845 3142775687 9002909517 0283529716 3445621296 4043523117 6006651012 4120065975 5851276178 5838292041 9748442360 8007193045 7618932349 2292796501 9875187212 7267507981 2554709589 0455635792 1221033346 6974992356 3025494780 2490114195 2123828153 0911407907 3860251522 7429958180 7247162591 6685451333 1239480494 7079119153 2673430282 4418604142 6363954800 0448002670 4962482017 9289647669 7583183271 3142517029 6923488962 7668440323 2609275249 6035799646 9256504936 8183609003 2380929345 9588970695 3653494060 3402166544 3755890045 6328822505 4525564056 4482465151 8754711962 1844396582 5337543885 6909411303 1509526179 3780029741 2076651479 3942590298 9695946995 5657612186 5619673378 6236256125 2163208628 6922210327 4889218654 3648022967 8070576561 5144632046 9279068212 0738837781 4233562823 6089632080 6822246801 2248261177 1858963814 0918390367 3672220888 3215137556 0037279839 4004152970 0287830766 7094447456 0134556417 2543709069 7939612257 1429894671 5435784687 8861444581 2314593571 9849225284 7160504922 1242470141 2147805734 5510500801 9086996033 0276347870 8108175450 1193071412 2339086639 3833952942 5786905076 4310063835 1983438934 1596131854 3475464955 6978103829 3097164651 4384070070 7360411237 3599843452 2516105070 2705623526 6012764848 3084076118 3013052793 2054274628 6540360367 4532865105 7065874882 2569815793 6789766974 2205750596 8344086973 5020141020 6723585020 0724522563 2651341055 9240190274 2162484391 4035998953 5394590944 0704691209 1409387001 2645600162 3742880210 9276457931 0657922955 2498872758 4610126483 6999892256 9596881592 0560010165 5256375678'


module.exports = {
    piSpaced: piSpaced,
    piString: piString
}
