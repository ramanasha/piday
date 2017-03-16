
const piString = '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900994657640789512694683983525957098258226205224894077267194782684826014769909026401363944374553050682034962524517493996514314298091906592509372216964615157098583874105978859597729754989301617539284681382686838689427741559918559252459539594310499725246808459872736446958486538367362226260991246080512438843904512441365497627807977156914359977001296160894416948685558484063534220722258284886481584560285060168427394522674676788952521385225499546667278239864565961163548862305774564980355936345681743241125150760694794510965960940252288797108931456691368672287489405601015033086179286809208747609178249385890097149096759852613655497818931297848216829989487226588048575640142704775551323796414515237462343645428584447952658678210511413547357395231134271661021359695362314429524849371871101457654035902799344037420073105785390621983874478084784896833214457138687519435064302184531910484810053706146806749192781911979399520614196634287544406437451237181921799983910159195618146751426912397489409071864942319615679452080951465502252316038819301420937621378559566389377870830390697920773467221825625996615014215030680384477345492026054146659252014974428507325186660021324340881907104863317346496514539057962685610055081066587969981635747363840525714591028970641401109712062804390397595156771577004203378699360072305587631763594218731251471205329281918261861258673215791984148488291644706095752706957220917567116722910981690915280173506712748583222871835209353965725121083579151369882091444210067510334671103141267111369908658516398315019701651511685171437657618351556508849099898599823873455283316355076479185358932261854896321329330898570642046752590709154814165498594616371802709819943099244889575712828905923233260972997120844335732654893823911932597463667305836041428138830320382490375898524374417029132765618093773444030707469211201913020330380197621101100449293215160842444859637669838952286847831235526582131449576857262433441893039686426243410773226978028073189154411010446823252716201052652272111660396665573092547110557853763466820653109896526918620564769312570586356620185581007293606598764861179104533488503461136576867532494416680396265797877185560845529654126654085306143444318586769751456614068007002378776591344017127494704205622305389945613140711270004078547332699390814546646458807972708266830634328587856983052358089330657574067954571637752542021149557615814002501262285941302164715509792592309907965473761255176567513575178296664547791745011299614890304639947132962107340437518957359614589019389713111790429782856475032031986915140287080859904801094121472213179476477726224142548545403321571853061422881375850430633217518297986622371721591607716692547487389866549494501146540628433663937900397692656721463853067360965712091807638327166416274888800786925602902284721040317211860820419000422966171196377921337575114959501566049631862947265473642523081770367515906735023507283540567040386743513622224771589150495309844489333096340878076932599397805419341447377441842631298608099888687413260472156951623965864573021631598193195167353812974167729478672422924654366800980676928238280689964004824354037014163149658979409243237896907069779422362508221688957383798623001593776471651228935786015881617557829735233446042815126272037343146531977774160319906655418763979293344195215413418994854447345673831624993419131814809277771038638773431772075456545322077709212019051660962804909263601975988281613323166636528619326686336062735676303544776280350450777235547105859548702790814356240145171806246436267945612753181340783303362542327839449753824372058353114771199260638133467768796959703098339130771098704085913374641442822772634659470474587847787201927715280731767907707157213444730605700733492436931138350493163128404251219256517980694113528013147013047816437885185290928545201165839341965621349143415956258658655705526904965209858033850722426482939728584783163057777560688876446248246857926039535277348030480290058760758251047470916439613626760449256274204208320856611906254543372131535958450687724602901618766795240616342522577195429162991930645537799140373404328752628889639958794757291746426357455254079091451357111369410911939325191076020825202618798531887705842972591677813149699009019211697173727847684726860849003377024242916513005005168323364350389517029893922334517220138128069650117844087451960121228599371623130171144484640903890644954440061986907548516026327505298349187407866808818338510228334508504860825039302133219715518430635455007668282949304137765527939751754613953984683393638304746119966538581538420568533862186725233402830871123282789212507712629463229563989898935821167456270102183564622013496715188190973038119800497340723961036854066431939509790190699639552453005450580685501956730229219139339185680344903982059551002263535361920419947455385938102343955449597783779023742161727111723643435439478221818528624085140066604433258885698670543154706965747458550332323342107301545940516553790686627333799585115625784322988273723198987571415957811196358330059408730681216028764962867446047746491599505497374256269010490377819868359381465741268049256487985561453723478673303904688383436346553794986419270563872931748723320837601123029911367938627089438799362016295154133714248928307220126901475466847653576164773794675200490757155527819653621323926406160136358155907422020203187277605277219005561484255518792530343513984425322341576233610642506390497500865627109535919465897514131034822769306247435363256916078154781811528436679570611086153315044521274739245449454236828860613408414863776700961207151249140430272538607648236341433462351897576645216413767969031495019108575984423919862916421939949072362346468441173940326591840443780513338945257423995082965912285085558215725031071257012668302402929525220118726767562204154205161841634847565169998116141010029960783869092916030288400269104140792886215078424516709087000699282120660418371806535567252532567532861291042487761825829765157959847035622262934860034158722980534989650226291748788202734209222245339856264766914905562842503912757710284027998066365825488926488025456610172967026640765590429099456815065265305371829412703369313785178609040708667114965583434347693385781711386455873678123014587687126603489139095620099393610310291616152881384379099042317473363948045759314931405297634757481193567091101377517210080315590248530906692037671922033229094334676851422144773793937517034436619910403375111735471918550464490263655128162288244625759163330391072253837421821408835086573917715096828874782656995995744906617583441375223970968340800535598491754173818839994469748676265516582765848358845314277568790029095170283529716344562129640435231176006651012412006597558512761785838292041974844236080071930457618932349229279650198751872127267507981255470958904556357921221033346697499235630254947802490114195212382815309114079073860251522742995818072471625916685451333123948049470791191532673430282441860414263639548000448002670496248201792896476697583183271314251702969234889627668440323260927524960357996469256504936818360900323809293459588970695365349406034021665443755890045632882250545255640564482465151875471196218443965825337543885690941130315095261793780029741207665147939425902989695946995565761218656196733786236256125216320862869222103274889218654364802296780705765615144632046927906821207388377814233562823608963208068222468012248261177185896381409183903673672220888321513755600372798394004152970028783076670944474560134556417254370906979396122571429894671543578468788614445812314593571984922528471605049221242470141214780573455105008019086996033027634787081081754501193071412233908663938339529425786905076431006383519834389341596131854347546495569781038293097164651438407007073604112373599843452251610507027056235266012764848308407611830130527932054274628654036036745328651057065874882256981579367897669742205750596834408697350201410206723585020072452256326513410559240190274216248439140359989535394590944070469120914093870012645600162374288021092764579310657922955249887275846101264836999892256959688159205600101655256375678';

const piSpaced = `3.
14159 26535 89793 23846\n26433 83279 50288 41971\n69399 37510 58209 74944\n59230 78164 06286 20899\n86280 34825 34211 70679\n82148 08651 32823 06647\n09384 46095 50582 23172\n53594 08128 48111 74502\n84102 70193 85211 05559\n64462 29489 54930 38196\n44288 10975 66593 34461\n28475 64823 37867 83165\n27120 19091 45648 56692\n34603 48610 45432 66482\n13393 60726 02491 41273\n72458 70066 06315 58817\n48815 20920 96282 92540\n91715 36436 78925 90360\n01133 05305 48820 46652\n13841 46951 94151 16094\n33057 27036 57595 91953\n09218 61173 81932 61179\n31051 18548 07446 23799\n62749 56735 18857 52724\n89122 79381 83011 94912\n98336 73362 44065 66430\n86021 39494 63952 24737\n19070 21798 60943 70277\n05392 17176 29317 67523\n84674 81846 76694 05132\n00056 81271 45263 56082\n77857 71342 75778 96091\n73637 17872 14684 40901\n22495 34301 46549 58537\n10507 92279 68925 89235\n42019 95611 21290 21960\n86403 44181 59813 62977\n47713 09960 51870 72113\n49999 99837 29780 49951\n05973 17328 16096 31859\n50244 59455 34690 83026\n42522 30825 33446 85035\n26193 11881 71010 00313\n78387 52886 58753 32083\n81420 61717 76691 47303\n59825 34904 28755 46873\n11595 62863 88235 37875\n93751 95778 18577 80532\n17122 68066 13001 92787\n66111 95909 21642 01989\n38095 25720 10654 85863\n27886 59361 53381 82796\n82303 01952 03530 18529\n68995 77362 25994 13891\n24972 17752 83479 13151\n55748 57242 45415 06959\n50829 53311 68617 27855\n88907 50983 81754 63746\n49393 19255 06040 09277\n01671 13900 98488 24012\n85836 16035 63707 66010\n47101 81942 95559 61989\n46767 83744 94482 55379\n77472 68471 04047 53464\n62080 46684 25906 94912\n93313 67702 89891 52104\n75216 20569 66024 05803\n81501 93511 25338 24300\n35587 64024 74964 73263\n91419 92726 04269 92279\n67823 54781 63600 93417\n21641 21992 45863 15030\n28618 29745 55706 74983\n85054 94588 58692 69956\n90927 21079 75093 02955\n32116 53449 87202 75596\n02364 80665 49911 98818\n34797 75356 63698 07426\n54252 78625 51818 41757\n46728 90977 77279 38000\n81647 06001 61452 49192\n17321 72147 72350 14144\n19735 68548 16136 11573\n52552 13347 57418 49468\n43852 33239 07394 14333\n45477 62416 86251 89835\n69485 56209 92192 22184\n27255 02542 56887 67179\n04946 01653 46680 49886\n27232 79178 60857 84383\n82796 79766 81454 10095\n38837 86360 95068 00642\n25125 20511 73929 84896\n08412 84886 26945 60424\n19652 85022 21066 11863\n06744 27862 20391 94945\n04712 37137 86960 95636\n43719 17287 46776 46575\n73962 41389 08658 32645\n99581 33904 78027 59009\n94657 64078 95126 94683\n98352 59570 98258 22620\n52248 94077 26719 47826\n84826 01476 99090 26401\n36394 43745 53050 68203\n49625 24517 49399 65143\n14298 09190 65925 09372\n21696 46151 57098 58387\n41059 78859 59772 97549\n89301 61753 92846 81382\n68683 86894 27741 55991\n85592 52459 53959 43104\n99725 24680 84598 72736\n44695 84865 38367 36222\n62609 91246 08051 24388\n43904 51244 13654 97627\n80797 71569 14359 97700\n12961 60894 41694 86855\n58484 06353 42207 22258\n28488 64815 84560 28506\n01684 27394 52267 46767\n88952 52138 52254 99546\n66727 82398 64565 96116\n35488 62305 77456 49803\n55936 34568 17432 41125\n15076 06947 94510 96596\n09402 52288 79710 89314\n56691 36867 22874 89405\n60101 50330 86179 28680\n92087 47609 17824 93858\n90097 14909 67598 52613\n65549 78189 31297 84821\n68299 89487 22658 80485\n75640 14270 47755 51323\n79641 45152 37462 34364\n54285 84447 95265 86782\n10511 41354 73573 95231\n13427 16610 21359 69536\n23144 29524 84937 18711\n01457 65403 59027 99344\n03742 00731 05785 39062\n19838 74478 08478 48968\n33214 45713 86875 19435\n06430 21845 31910 48481\n00537 06146 80674 91927\n81911 97939 95206 14196\n63428 75444 06437 45123\n71819 21799 98391 01591\n95618 14675 14269 12397\n48940 90718 64942 31961\n56794 52080 95146 55022\n52316 03881 93014 20937\n62137 85595 66389 37787\n08303 90697 92077 34672\n21825 62599 66150 14215\n03068 03844 77345 49202\n60541 46659 25201 49744\n28507 32518 66600 21324\n34088 19071 04863 31734\n64965 14539 05796 26856\n10055 08106 65879 69981\n63574 73638 40525 71459\n10289 70641 40110 97120\n62804 39039 75951 56771\n57700 42033 78699 36007\n23055 87631 76359 42187\n31251 47120 53292 81918\n26186 12586 73215 79198\n41484 88291 64470 60957\n52706 95722 09175 67116\n72291 09816 90915 28017\n35067 12748 58322 28718\n35209 35396 57251 21083\n57915 13698 82091 44421\n00675 10334 67110 31412\n67111 36990 86585 16398\n31501 97016 51511 68517\n14376 57618 35155 65088\n49099 89859 98238 73455\n28331 63550 76479 18535\n89322 61854 89632 13293\n30898 57064 20467 52590\n70915 48141 65498 59461\n63718 02709 81994 30992\n44889 57571 28289 05923\n23326 09729 97120 84433\n57326 54893 82391 19325\n97463 66730 58360 41428\n13883 03203 82490 37589\n85243 74417 02913 27656\n18093 77344 40307 07469\n21120 19130 20330 38019\n76211 01100 44929 32151\n60842 44485 96376 69838\n95228 68478 31235 52658\n21314 49576 85726 24334\n41893 03968 64262 43410\n77322 69780 28073 18915\n44110 10446 82325 27162\n01052 65227 21116 60396\n66557 30925 47110 55785\n37634 66820 65310 98965\n26918 62056 47693 12570\n58635 66201 85581 00729\n36065 98764 86117 91045\n33488 50346 11365 76867\n53249 44166 80396 26579\n78771 85560 84552 96541\n26654 08530 61434 44318\n58676 97514 56614 06800\n70023 78776 59134 40171\n27494 70420 56223 05389\n94561 31407 11270 00407\n85473 32699 39081 45466\n46458 80797 27082 66830\n63432 85878 56983 05235\n80893 30657 57406 79545\n71637 75254 20211 49557\n61581 40025 01262 28594\n13021 64715 50979 25923\n09907 96547 37612 55176\n56751 35751 78296 66454\n77917 45011 29961 48903\n04639 94713 29621 07340\n43751 89573 59614 58901\n93897 13111 79042 97828\n56475 03203 19869 15140\n28708 08599 04801 09412\n14722 13179 47647 77262\n24142 54854 54033 21571\n85306 14228 81375 85043\n06332 17518 29798 66223\n71721 59160 77166 92547\n48738 98665 49494 50114\n65406 28433 66393 79003\n97692 65672 14638 53067\n36096 57120 91807 63832\n71664 16274 88880 07869\n25602 90228 47210 40317\n21186 08204 19000 42296\n61711 96377 92133 75751\n14959 50156 60496 31862\n94726 54736 42523 08177\n03675 15906 73502 35072\n83540 56704 03867 43513\n62222 47715 89150 49530\n98444 89333 09634 08780\n76932 59939 78054 19341\n44737 74418 42631 29860\n80998 88687 41326 04721\n56951 62396 58645 73021\n63159 81931 95167 35381\n29741 67729 47867 24229\n24654 36680 09806 76928\n23828 06899 64004 82435\n40370 14163 14965 89794\n09243 23789 69070 69779\n42236 25082 21688 95738\n37986 23001 59377 64716\n51228 93578 60158 81617\n55782 97352 33446 04281\n51262 72037 34314 65319\n77774 16031 99066 55418\n76397 92933 44195 21541\n34189 94854 44734 56738\n31624 99341 91318 14809\n27777 10386 38773 43177\n20754 56545 32207 77092\n12019 05166 09628 04909\n26360 19759 88281 61332\n31666 36528 61932 66863\n36062 73567 63035 44776\n28035 04507 77235 54710\n58595 48702 79081 43562\n40145 17180 62464 36267\n94561 27531 81340 78330\n33625 42327 83944 97538\n24372 05835 31147 71199\n26063 81334 67768 79695\n97030 98339 13077 10987\n04085 91337 46414 42822\n77263 46594 70474 58784\n77872 01927 71528 07317\n67907 70715 72134 44730\n60570 07334 92436 93113\n83504 93163 12840 42512\n19256 51798 06941 13528\n01314 70130 47816 43788\n51852 90928 54520 11658\n39341 96562 13491 43415\n95625 86586 55705 52690\n49652 09858 03385 07224\n26482 93972 85847 83163\n05777 75606 88876 44624\n82468 57926 03953 52773\n48030 48029 00587 60758\n25104 74709 16439 61362\n67604 49256 27420 42083\n20856 61190 62545 43372\n13153 59584 50687 72460\n29016 18766 79524 06163\n42522 57719 54291 62991\n93064 55377 99140 37340\n43287 52628 88963 99587\n94757 29174 64263 57455\n25407 90914 51357 11136\n94109 11939 32519 10760\n20825 20261 87985 31887\n70584 29725 91677 81314\n96990 09019 21169 71737\n27847 68472 68608 49003\n37702 42429 16513 00500\n51683 23364 35038 95170\n29893 92233 45172 20138\n12806 96501 17844 08745\n19601 21228 59937 16231\n30171 14448 46409 03890\n64495 44400 61986 90754\n85160 26327 50529 83491\n87407 86680 88183 38510\n22833 45085 04860 82503\n93021 33219 71551 84306\n35455 00766 82829 49304\n13776 55279 39751 75461\n39539 84683 39363 83047\n46119 96653 85815 38420\n56853 38621 86725 23340\n28308 71123 28278 92125\n07712 62946 32295 63989\n89893 58211 67456 27010\n21835 64622 01349 67151\n88190 97303 81198 00497\n34072 39610 36854 06643\n19395 09790 19069 96395\n52453 00545 05806 85501\n95673 02292 19139 33918\n56803 44903 98205 95510\n02263 53536 19204 19947\n45538 59381 02343 95544\n95977 83779 02374 21617\n27111 72364 34354 39478\n22181 85286 24085 14006\n66044 33258 88569 86705\n43154 70696 57474 58550\n33232 33421 07301 54594\n05165 53790 68662 73337\n99585 11562 57843 22988\n27372 31989 87571 41595\n78111 96358 33005 94087\n30681 21602 87649 62867\n44604 77464 91599 50549\n73742 56269 01049 03778\n19868 35938 14657 41268\n04925 64879 85561 45372\n34786 73303 90468 83834\n36346 55379 49864 19270\n56387 29317 48723 32083\n76011 23029 91136 79386\n27089 43879 93620 16295\n15413 37142 48928 30722\n01269 01475 46684 76535\n76164 77379 46752 00490\n75715 55278 19653 62132\n39264 06160 13635 81559\n07422 02020 31872 77605\n27721 90055 61484 25551\n87925 30343 51398 44253\n22341 57623 36106 42506\n39049 75008 65627 10953\n59194 65897 51413 10348\n22769 30624 74353 63256\n91607 81547 81811 52843\n66795 70611 08615 33150\n44521 27473 92454 49454\n23682 88606 13408 41486\n37767 00961 20715 12491\n40430 27253 86076 48236\n34143 34623 51897 57664\n52164 13767 96903 14950\n19108 57598 44239 19862\n91642 19399 49072 36234\n64684 41173 94032 65918\n40443 78051 33389 45257\n42399 50829 65912 28508\n55582 15725 03107 12570\n12668 30240 29295 25220\n11872 67675 62204 15420\n51618 41634 84756 51699\n98116 14101 00299 60783\n86909 29160 30288 40026\n91041 40792 88621 50784\n24516 70908 70006 99282\n12066 04183 71806 53556\n72525 32567 53286 12910\n42487 76182 58297 65157\n95984 70356 22262 93486\n00341 58722 98053 49896\n50226 29174 87882 02734\n20922 22453 39856 26476\n69149 05562 84250 39127\n57710 28402 79980 66365\n82548 89264 88025 45661\n01729 67026 64076 55904\n29099 45681 50652 65305\n37182 94127 03369 31378\n51786 09040 70866 71149\n65583 43434 76933 85781\n71138 64558 73678 12301\n45876 87126 60348 91390\n95620 09939 36103 10291\n61615 28813 84379 09904\n23174 73363 94804 57593\n14931 40529 76347 57481\n19356 70911 01377 51721\n00803 15590 24853 09066\n92037 67192 20332 29094\n33467 68514 22144 77379\n39375 17034 43661 99104\n03375 11173 54719 18550\n46449 02636 55128 16228\n82446 25759 16333 03910\n72253 83742 18214 08835\n08657 39177 15096 82887\n47826 56995 99574 49066\n17583 44137 52239 70968\n34080 05355 98491 75417\n38188 39994 46974 86762\n65516 58276 58483 58845\n31427 75687 90029 09517\n02835 29716 34456 21296\n40435 23117 60066 51012\n41200 65975 58512 76178\n58382 92041 97484 42360\n80071 93045 76189 32349\n22927 96501 98751 87212\n72675 07981 25547 09589\n04556 35792 12210 33346\n69749 92356 30254 94780\n24901 14195 21238 28153\n09114 07907 38602 51522\n74299 58180 72471 62591\n66854 51333 12394 80494\n70791 19153 26734 30282\n44186 04142 63639 54800\n04480 02670 49624 82017\n92896 47669 75831 83271\n31425 17029 69234 88962\n76684 40323 26092 75249\n60357 99646 92565 04936\n81836 09003 23809 29345\n95889 70695 36534 94060\n34021 66544 37558 90045\n63288 22505 45255 64056\n44824 65151 87547 11962\n18443 96582 53375 43885\n69094 11303 15095 26179\n37800 29741 20766 51479\n39425 90298 96959 46995\n56576 12186 56196 73378\n62362 56125 21632 08628\n69222 10327 48892 18654\n36480 22967 80705 76561\n51446 32046 92790 68212\n07388 37781 42335 62823\n60896 32080 68222 46801\n22482 61177 18589 63814\n09183 90367 36722 20888\n32151 37556 00372 79839\n40041 52970 02878 30766\n70944 47456 01345 56417\n25437 09069 79396 12257\n14298 94671 54357 84687\n88614 44581 23145 93571\n98492 25284 71605 04922\n12424 70141 21478 05734\n55105 00801 90869 96033\n02763 47870 81081 75450\n11930 71412 23390 86639\n38339 52942 57869 05076\n43100 63835 19834 38934\n15961 31854 34754 64955\n69781 03829 30971 64651\n43840 70070 73604 11237\n35998 43452 25161 05070\n27056 23526 60127 64848\n30840 76118 30130 52793\n20542 74628 65403 60367\n45328 65105 70658 74882\n25698 15793 67897 66974\n22057 50596 83440 86973\n50201 41020 67235 85020\n07245 22563 26513 41055\n92401 90274 21624 84391\n40359 98953 53945 90944\n07046 91209 14093 87001\n26456 00162 37428 80210\n92764 57931 06579 22955\n24988 72758 46101 26483\n69998 92256 95968 81592\n05600 10165 52563 75678\n
`;

module.exports = {
    piSpaced: piSpaced,
    piString: piString
};
