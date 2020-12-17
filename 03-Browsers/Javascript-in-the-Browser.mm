<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="The Browser&#xa;as Javascript&#xa;Environment" FOLDED="false" ID="ID_1923653338" CREATED="1606215758389" MODIFIED="1606215784824" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle" zoom="1.21">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" show_note_icons="true" fit_to_viewport="false"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="8" RULE="ON_BRANCH_CREATION"/>
<node TEXT="HTTP" FOLDED="true" POSITION="right" ID="ID_614710247" CREATED="1608224767671" MODIFIED="1608224819610">
<edge COLOR="#007c00"/>
<node TEXT="Client-Server" ID="ID_1277151278" CREATED="1608224795143" MODIFIED="1608224802164"/>
<node TEXT="Request-Response" ID="ID_1201755844" CREATED="1608224802534" MODIFIED="1608224807779"/>
<node TEXT="Methods" ID="ID_1517537818" CREATED="1608224770727" MODIFIED="1608224772989">
<node TEXT="GET" ID="ID_877964970" CREATED="1608224778167" MODIFIED="1608224781521"/>
<node TEXT="POST" ID="ID_426686952" CREATED="1608224781807" MODIFIED="1608224783188"/>
<node TEXT="PUT" ID="ID_874611321" CREATED="1608224783559" MODIFIED="1608224785298"/>
<node TEXT="DELETE" ID="ID_1688622450" CREATED="1608224785598" MODIFIED="1608224787464"/>
<node TEXT="HEAD" ID="ID_262053525" CREATED="1608224787679" MODIFIED="1608224789320"/>
<node TEXT="TRACE" ID="ID_1278689087" CREATED="1608224789678" MODIFIED="1608224791723"/>
</node>
</node>
<node TEXT="DOM" FOLDED="true" POSITION="right" ID="ID_91758520" CREATED="1606215793747" MODIFIED="1606215799048" LINK="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">
<edge COLOR="#ff0000"/>
<node TEXT="Document" FOLDED="true" ID="ID_1293149164" CREATED="1606220839978" MODIFIED="1606221486822" LINK="https://developer.mozilla.org/en-US/docs/Web/API/Document">
<node TEXT="methods" FOLDED="true" ID="ID_298183913" CREATED="1606221674468" MODIFIED="1606292571674"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Be aware that some&quot;getters&quot; return an &quot;Element&quot; and some an HTMLCollection.
    </p>
  </body>
</html>
</richcontent>
<node TEXT="retrieving Elements" FOLDED="true" ID="ID_707189569" CREATED="1606294097151" MODIFIED="1606294105065">
<node TEXT="getElementById" ID="ID_805018015" CREATED="1606220844514" MODIFIED="1606220850196"/>
<node TEXT="getElementsByClassName" ID="ID_1861614377" CREATED="1606220919361" MODIFIED="1606220924460"/>
<node TEXT="getElementByName" ID="ID_547279008" CREATED="1606220938979" MODIFIED="1606220943228"/>
<node TEXT="getElementsByTagName" ID="ID_622301531" CREATED="1606220850834" MODIFIED="1606220856803"/>
<node TEXT="querySelector" ID="ID_1618492777" CREATED="1606220857161" MODIFIED="1606220877347"/>
<node TEXT="querySelectorAll" ID="ID_995347144" CREATED="1606220877658" MODIFIED="1606220881219"/>
</node>
<node TEXT="changing the Document" FOLDED="true" ID="ID_1934101204" CREATED="1606294115517" MODIFIED="1606294124052">
<node TEXT="appendChild()" ID="ID_1013286541" CREATED="1606294090886" MODIFIED="1606378802672">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_339341967" STARTINCLINATION="40;0;" ENDINCLINATION="40;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT="append()" ID="ID_339341967" CREATED="1606378713111" MODIFIED="1606379005623"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Instead of appendChild() the newer API append() is available.
    </p>
    <p>
      Differences:
    </p>
    <p>
      - possible to add &quot;Nodes&quot; and/or &quot;text&quot;:
    </p>
    <p>
      &#160;&#160;let h1 = document.createElement(&quot;h1&quot;);
    </p>
    <p>
      &#160;&#160;SOME_ELEMENT.append(h1);
    </p>
    <p>
      &#160;&#160;SOME_ELEMENT.append(&quot;some text&quot;);
    </p>
    <p>
      - also adding multiple entities at once possible (append(NODE_1, NODE_2, text_a, NODE_3))
    </p>
    <p>
      &#160;&#160;SOME_ELEMENT.append(h1, &quot;some text&quot;);
    </p>
  </body>
</html>
</richcontent>
</node>
<node TEXT="write()" ID="ID_429294944" CREATED="1606293287218" MODIFIED="1606378709611"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Be aware of the security implications:
    </p>
    <p>
      via write it is possible to inject Javascript, so if you would write user-contributed content to a document, that content would be required to be sanitized.
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
<node TEXT="createElement()" ID="ID_1453481322" CREATED="1606220961563" MODIFIED="1606294141224"/>
<node TEXT="..." ID="ID_220210784" CREATED="1606221669412" MODIFIED="1606221670775"/>
</node>
</node>
<node TEXT="Node" FOLDED="true" ID="ID_922643980" CREATED="1606221438524" MODIFIED="1606221497056" LINK="https://developer.mozilla.org/en-US/docs/Web/API/Node">
<node TEXT="attributes" FOLDED="true" ID="ID_282903496" CREATED="1606221647765" MODIFIED="1606221691943">
<node TEXT="baseURI" ID="ID_633485248" CREATED="1606221570940" MODIFIED="1606221572679"/>
<node TEXT="isConnected" ID="ID_1718463444" CREATED="1606221591220" MODIFIED="1606221596086"/>
<node TEXT="ownerDocument" ID="ID_1623684397" CREATED="1606221555396" MODIFIED="1606221558743"/>
<node TEXT="textContent" ID="ID_846660310" CREATED="1606221528212" MODIFIED="1606221531383"/>
<node TEXT="node-related" ID="ID_601345350" CREATED="1606292787054" MODIFIED="1606292799013">
<node TEXT="childNodes" ID="ID_584422580" CREATED="1606221573516" MODIFIED="1606221577711"/>
<node TEXT="firstChild" ID="ID_1100143696" CREATED="1606221578140" MODIFIED="1606221580495"/>
<node TEXT="lastChild" ID="ID_1548134722" CREATED="1606221596876" MODIFIED="1606221599919"/>
<node TEXT="nextSibling" ID="ID_286989621" CREATED="1606221600252" MODIFIED="1606221602991"/>
<node TEXT="parentNode" ID="ID_823747164" CREATED="1606221517371" MODIFIED="1606221520508"/>
<node TEXT="parentElement" ID="ID_1198647898" CREATED="1606221520828" MODIFIED="1606221527967"/>
</node>
</node>
<node TEXT="methods" FOLDED="true" ID="ID_1430559101" CREATED="1606221657684" MODIFIED="1606221695511">
<node TEXT="getRootNode()" ID="ID_417302396" CREATED="1606221545019" MODIFIED="1606221548047"/>
</node>
</node>
<node TEXT="Element" FOLDED="true" ID="ID_281622734" CREATED="1606221041522" MODIFIED="1606292393950" LINK="https://developer.mozilla.org/en-US/docs/Web/API/Element"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      element inherits from its parent &quot;Node&quot;
    </p>
  </body>
</html>
</richcontent>
<node TEXT="attributes" FOLDED="true" ID="ID_82443669" CREATED="1606221276795" MODIFIED="1606221293605">
<node TEXT="attributes" ID="ID_55928971" CREATED="1606221076155" MODIFIED="1606221080637"/>
<node TEXT="classList" ID="ID_1514541119" CREATED="1606221081075" MODIFIED="1606221083012"/>
<node TEXT="innerHTML" ID="ID_1007753826" CREATED="1606221096115" MODIFIED="1606221100357"/>
<node TEXT="outerHTML" ID="ID_1800552137" CREATED="1606221116131" MODIFIED="1606221118301"/>
<node TEXT="innerText" ID="ID_1862429060" CREATED="1606221118931" MODIFIED="1606292992805"/>
<node TEXT="textContent" ID="ID_930411516" CREATED="1606293151554" MODIFIED="1606293199819">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_846660310" STARTINCLINATION="283;0;" ENDINCLINATION="283;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
</node>
<node TEXT="methods" ID="ID_906246789" CREATED="1606221352476" MODIFIED="1606221355710">
<node TEXT="addEventListener()" ID="ID_1592501306" CREATED="1606221356619" MODIFIED="1606221396560"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Or via assigning the listener to the &quot;oneventname&quot; property.
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
<node TEXT="events" FOLDED="true" ID="ID_322954609" CREATED="1606221266635" MODIFIED="1606221272452">
<node TEXT="Clipboard" ID="ID_1628083759" CREATED="1606221333219" MODIFIED="1606221335798"/>
<node TEXT="Composition" ID="ID_753840719" CREATED="1606221336059" MODIFIED="1606221338382"/>
<node TEXT="Focus" ID="ID_1197307369" CREATED="1606221317892" MODIFIED="1606221319926"/>
<node TEXT="Fullscreen" ID="ID_463641498" CREATED="1606221320187" MODIFIED="1606221323069"/>
<node TEXT="Keyboard" ID="ID_1172400948" CREATED="1606221311571" MODIFIED="1606221313654"/>
<node TEXT="Mouse" ID="ID_800424163" CREATED="1606221304020" MODIFIED="1606221306229"/>
<node TEXT="Touch" ID="ID_1204707729" CREATED="1606221306563" MODIFIED="1606221310790"/>
</node>
</node>
</node>
<node TEXT="Browser" FOLDED="true" POSITION="right" ID="ID_440232407" CREATED="1608194248910" MODIFIED="1608194252224">
<edge COLOR="#7c0000"/>
<node TEXT=".fetch(URL)" FOLDED="true" ID="ID_1639188317" CREATED="1608194295781" MODIFIED="1608224626667" LINK="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      &quot;fetch&quot; is already asynchronous and returns a Promise:
    </p>
    <p>
      =&gt; .then()
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;&#160;.catch()
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;&#160;...
    </p>
    <p>
      
    </p>
    <p>
      Often used when interacting with an foreign API.
    </p>
  </body>
</html>
</richcontent>
<node TEXT="Using Fetch" ID="ID_78280437" CREATED="1608224640887" MODIFIED="1608224646535" LINK="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"/>
<node TEXT="Request Types" FOLDED="true" ID="ID_1297107914" CREATED="1608194464000" MODIFIED="1608194470210">
<node TEXT="default: GET Request" ID="ID_1934941835" CREATED="1608194454692" MODIFIED="1608194463566"/>
<node TEXT="POST" ID="ID_669756305" CREATED="1608194476144" MODIFIED="1608194479723"/>
<node TEXT="..." ID="ID_1526278031" CREATED="1608194480256" MODIFIED="1608194481930"/>
</node>
<node TEXT="Response" FOLDED="true" ID="ID_1830572900" CREATED="1608194576764" MODIFIED="1608194580016">
<node TEXT=".ok" ID="ID_1675667900" CREATED="1608194615222" MODIFIED="1608194673620"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      .ok will be true if the HTTP.status of the Response is in the 200s.
    </p>
  </body>
</html>
</richcontent>
</node>
<node TEXT=".text()" ID="ID_1566397667" CREATED="1608194699092" MODIFIED="1608194712416"/>
<node TEXT=".json()" ID="ID_1127449854" CREATED="1608194713188" MODIFIED="1608194829173"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      .json() will parse the Response's body-text through JSON.parse()
    </p>
    <p>
      =&gt; it will return an Object
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
<node TEXT="CORS - Cross Origin Resource Sharing" ID="ID_120743034" CREATED="1608194872106" MODIFIED="1608224687548" LINK="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"/>
<node TEXT="window.Storage" FOLDED="true" ID="ID_1717519374" CREATED="1608195102611" MODIFIED="1608224591105" LINK="https://developer.mozilla.org/de/docs/Web/API/Storage">
<node TEXT="properties" FOLDED="true" ID="ID_19403177" CREATED="1608195385971" MODIFIED="1608195390959">
<node TEXT="length" ID="ID_1824067966" CREATED="1608195378507" MODIFIED="1608195382933"/>
<node TEXT="setItem(key, value)" ID="ID_1686157107" CREATED="1608195312568" MODIFIED="1608195323080"/>
<node TEXT="getItem(key) =&gt; value" ID="ID_1106973948" CREATED="1608195323624" MODIFIED="1608195343313"/>
<node TEXT="removeItem(key)" ID="ID_101103608" CREATED="1608195344733" MODIFIED="1608195358687"/>
<node TEXT="clear()" ID="ID_1648415159" CREATED="1608195360332" MODIFIED="1608195365166"/>
<node TEXT="key(index)" ID="ID_1675507070" CREATED="1608195365924" MODIFIED="1608195377787"/>
</node>
<node TEXT="localStorage" ID="ID_1540782903" CREATED="1608195245066" MODIFIED="1608224575784" LINK="https://developer.mozilla.org/de/docs/Web/API/Window/localStorage"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      is durable across sessions
    </p>
  </body>
</html>
</richcontent>
</node>
<node TEXT="sessionStorage" ID="ID_466646317" CREATED="1608195274862" MODIFIED="1608224598904" LINK="https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      removed after the session closes (closing the tab/window).
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
<node TEXT="Events" FOLDED="true" POSITION="right" ID="ID_1716215482" CREATED="1606215886642" MODIFIED="1608224956409">
<edge COLOR="#00ff00"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      An EventHandler is pinned to an Element's EventListener for a specific Phase (Capturing/Bubbling).
    </p>
  </body>
</html>

</richcontent>
<node TEXT="MDN" FOLDED="true" ID="ID_98999539" CREATED="1606216606622" MODIFIED="1606216620769">
<node TEXT="Introduction to Events" ID="ID_853650039" CREATED="1606216641702" MODIFIED="1606216654237" LINK="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"/>
<node TEXT="Event Reference" FOLDED="true" ID="ID_1920444375" CREATED="1606216622845" MODIFIED="1606216631821" LINK="https://developer.mozilla.org/en-US/docs/Web/Events">
<node TEXT="Resource" FOLDED="true" ID="ID_449234748" CREATED="1606220045296" MODIFIED="1606220061859">
<node TEXT="error" ID="ID_1222781908" CREATED="1606220071136" MODIFIED="1606220072513"/>
<node TEXT="abort" ID="ID_1144148765" CREATED="1606220072856" MODIFIED="1606220074308"/>
<node TEXT="load" ID="ID_1681006391" CREATED="1606220074776" MODIFIED="1606220075763"/>
<node TEXT="beforeunload" ID="ID_1268226207" CREATED="1606220076055" MODIFIED="1606220078148"/>
<node TEXT="unload" ID="ID_282241434" CREATED="1606220078423" MODIFIED="1606220079627"/>
</node>
<node TEXT="Network" FOLDED="true" ID="ID_1420784212" CREATED="1606220049655" MODIFIED="1606220065273">
<node TEXT="online" ID="ID_1809325398" CREATED="1606220081304" MODIFIED="1606220083427"/>
<node TEXT="offline" ID="ID_1915305860" CREATED="1606220083552" MODIFIED="1606220084794"/>
</node>
<node TEXT="Focus" FOLDED="true" ID="ID_149935098" CREATED="1606220052752" MODIFIED="1606897455055">
<font BOLD="true"/>
<node TEXT="focus" ID="ID_432759946" CREATED="1606220086616" MODIFIED="1606220094122"/>
<node TEXT="blur" ID="ID_656360133" CREATED="1606220094248" MODIFIED="1606220095290"/>
<node TEXT="focusin" ID="ID_1853857140" CREATED="1606220095776" MODIFIED="1606220097923"/>
<node TEXT="focusout" ID="ID_506140508" CREATED="1606220098336" MODIFIED="1606220108937"/>
</node>
<node TEXT="WebSocket" FOLDED="true" ID="ID_1950848259" CREATED="1606220110176" MODIFIED="1606220116571">
<node TEXT="open" ID="ID_1193309173" CREATED="1606220117632" MODIFIED="1606220119227"/>
<node TEXT="message" ID="ID_1102226568" CREATED="1606220119520" MODIFIED="1606220121147"/>
<node TEXT="error" ID="ID_1954327233" CREATED="1606220121648" MODIFIED="1606220122883"/>
<node TEXT="close" ID="ID_755910423" CREATED="1606220123239" MODIFIED="1606220124740"/>
</node>
<node TEXT="Session History" FOLDED="true" ID="ID_204386772" CREATED="1606220126072" MODIFIED="1606220130723">
<node TEXT="pagehide" ID="ID_806372764" CREATED="1606220132592" MODIFIED="1606220138444"/>
<node TEXT="pageshow" ID="ID_789335541" CREATED="1606220138824" MODIFIED="1606220142525"/>
<node TEXT="popstate" ID="ID_1824091303" CREATED="1606220142888" MODIFIED="1606220148397"/>
</node>
<node TEXT="CSS Animation" ID="ID_1033033577" CREATED="1606220149880" MODIFIED="1606220152931"/>
<node TEXT="CSS Transition" ID="ID_167397174" CREATED="1606220156921" MODIFIED="1606220160140"/>
<node TEXT="Form" FOLDED="true" ID="ID_589153747" CREATED="1606220160448" MODIFIED="1606897930892">
<font BOLD="true"/>
<node TEXT="reset" ID="ID_1758293694" CREATED="1606220164087" MODIFIED="1606220166419"/>
<node TEXT="submit" ID="ID_1831005945" CREATED="1606220166735" MODIFIED="1606220167867"/>
</node>
<node TEXT="Printing" ID="ID_781249273" CREATED="1606220172424" MODIFIED="1606220174452"/>
<node TEXT="Text Composition" ID="ID_1328665544" CREATED="1606220176312" MODIFIED="1606220182228"/>
<node TEXT="View" FOLDED="true" ID="ID_764044033" CREATED="1606220182584" MODIFIED="1606220183699">
<node TEXT="fullscreenchange" ID="ID_827870571" CREATED="1606220186825" MODIFIED="1606220191084"/>
<node TEXT="fullscreenerror" ID="ID_1430120004" CREATED="1606220191560" MODIFIED="1606220195268"/>
<node TEXT="resize" ID="ID_1336093013" CREATED="1606220195768" MODIFIED="1606220201172"/>
<node TEXT="scroll" ID="ID_1544863698" CREATED="1606220201528" MODIFIED="1606220205060"/>
</node>
<node TEXT="Clipboard" FOLDED="true" ID="ID_1257459665" CREATED="1606220209712" MODIFIED="1606220214885">
<node TEXT="cut" ID="ID_65457721" CREATED="1606220215449" MODIFIED="1606220219244"/>
<node TEXT="copy" ID="ID_802585079" CREATED="1606220219656" MODIFIED="1606220221225"/>
<node TEXT="paste" ID="ID_346005047" CREATED="1606220221784" MODIFIED="1606220223547"/>
</node>
<node TEXT="Keyboard" FOLDED="true" ID="ID_1791256110" CREATED="1606220224520" MODIFIED="1606897499518">
<font BOLD="true"/>
<node TEXT="keydown" ID="ID_614270019" CREATED="1606220228352" MODIFIED="1606220230524"/>
<node TEXT="keypress" ID="ID_345343093" CREATED="1606220230808" MODIFIED="1606220233284"/>
<node TEXT="keyup" ID="ID_1372341132" CREATED="1606220233600" MODIFIED="1606220234948"/>
</node>
<node TEXT="Mouse" FOLDED="true" ID="ID_13028489" CREATED="1606220236433" MODIFIED="1606897364781">
<font BOLD="true"/>
<node TEXT="auxclick" ID="ID_1103297385" CREATED="1606220238920" MODIFIED="1606220241579"/>
<node TEXT="click" ID="ID_938484985" CREATED="1606220241696" MODIFIED="1606897369222">
<font BOLD="true"/>
</node>
<node TEXT="contextmenu" ID="ID_420273641" CREATED="1606220243120" MODIFIED="1606220245466"/>
<node TEXT="dblclick" ID="ID_890321337" CREATED="1606220245953" MODIFIED="1606220255613"/>
<node TEXT="mousedown" ID="ID_589134733" CREATED="1606220255744" MODIFIED="1606897373787">
<font BOLD="true"/>
</node>
<node TEXT="mouseenter" ID="ID_713098482" CREATED="1606220262456" MODIFIED="1606897375631">
<font BOLD="true"/>
</node>
<node TEXT="mouseleave" ID="ID_729279779" CREATED="1606220265744" MODIFIED="1606897377380">
<font BOLD="true"/>
</node>
<node TEXT="mousemove" ID="ID_137648860" CREATED="1606220268440" MODIFIED="1606897382249">
<font BOLD="false"/>
</node>
<node TEXT="mouseover" ID="ID_969099107" CREATED="1606220271233" MODIFIED="1606897384856">
<font BOLD="true"/>
</node>
<node TEXT="mouseout" ID="ID_1049891925" CREATED="1606220274160" MODIFIED="1606897389051">
<font BOLD="true"/>
</node>
<node TEXT="mouseup" ID="ID_824312856" CREATED="1606220277392" MODIFIED="1606897398209">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_589134733" STARTINCLINATION="130;0;" ENDINCLINATION="130;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<font BOLD="true"/>
</node>
<node TEXT="pointerlockchange" ID="ID_1661223593" CREATED="1606220286368" MODIFIED="1606220298612"/>
<node TEXT="pointerlockerror" ID="ID_189492414" CREATED="1606220298961" MODIFIED="1606220302452"/>
<node TEXT="select" ID="ID_1567583344" CREATED="1606220302841" MODIFIED="1606220305564"/>
<node TEXT="wheel" ID="ID_798526155" CREATED="1606220305936" MODIFIED="1606220311844"/>
</node>
<node TEXT="Drag &amp; Drop" FOLDED="true" ID="ID_1688990802" CREATED="1606220313857" MODIFIED="1606897904396">
<font BOLD="true"/>
<node TEXT="drag" ID="ID_1081847681" CREATED="1606220321921" MODIFIED="1606220328517"/>
<node TEXT="dragend" ID="ID_151741165" CREATED="1606220328905" MODIFIED="1606220330676"/>
<node TEXT="dragenter" ID="ID_102997404" CREATED="1606220331193" MODIFIED="1606220333502"/>
<node TEXT="dragstart" ID="ID_1719290962" CREATED="1606220333952" MODIFIED="1606220336236"/>
<node TEXT="dragleave" ID="ID_876056147" CREATED="1606220337041" MODIFIED="1606220339196"/>
<node TEXT="dragover" ID="ID_49265127" CREATED="1606220339985" MODIFIED="1606220341982"/>
<node TEXT="drop" ID="ID_1894982459" CREATED="1606220342329" MODIFIED="1606220343293"/>
</node>
<node TEXT="Media" FOLDED="true" ID="ID_1542329262" CREATED="1606220344656" MODIFIED="1606898028689">
<font BOLD="true"/>
<node TEXT="audioprocess" ID="ID_1885169843" CREATED="1606220347233" MODIFIED="1606220357373"/>
<node TEXT="canplay" ID="ID_1443482785" CREATED="1606220357849" MODIFIED="1606220359684"/>
<node TEXT="canplaythrough" ID="ID_502824957" CREATED="1606220360153" MODIFIED="1606220363094"/>
<node TEXT="complete" ID="ID_884868362" CREATED="1606220363465" MODIFIED="1606220365948"/>
<node TEXT="durationchange" ID="ID_1626053367" CREATED="1606220366409" MODIFIED="1606220370373"/>
<node TEXT="emptied" ID="ID_717891081" CREATED="1606220370777" MODIFIED="1606220373621"/>
<node TEXT="ended" ID="ID_1252498944" CREATED="1606220373937" MODIFIED="1606220375750"/>
<node TEXT="loadeddata" ID="ID_546299177" CREATED="1606220376081" MODIFIED="1606220381361"/>
<node TEXT="pause" ID="ID_1463345692" CREATED="1606220382129" MODIFIED="1606220383949"/>
<node TEXT="play" ID="ID_972411751" CREATED="1606220384393" MODIFIED="1606220385477"/>
<node TEXT="playing" ID="ID_1103052215" CREATED="1606220385672" MODIFIED="1606220387597"/>
<node TEXT="ratechange" ID="ID_1748218652" CREATED="1606220388113" MODIFIED="1606220390470"/>
<node TEXT="seeked" ID="ID_1837398637" CREATED="1606220390800" MODIFIED="1606220393469"/>
<node TEXT="seeking" ID="ID_941409916" CREATED="1606220393705" MODIFIED="1606220395797"/>
<node TEXT="timeupdate" ID="ID_226749122" CREATED="1606220396144" MODIFIED="1606220403869"/>
<node TEXT="volumechange" ID="ID_647778811" CREATED="1606220407033" MODIFIED="1606220410539"/>
<node TEXT="waiting" ID="ID_258534647" CREATED="1606220410865" MODIFIED="1606220414725"/>
</node>
<node TEXT="Progress" FOLDED="true" ID="ID_1457832602" CREATED="1606220438369" MODIFIED="1606220441780">
<node TEXT="abort" ID="ID_619707311" CREATED="1606220443473" MODIFIED="1606220445547"/>
<node TEXT="error" ID="ID_1628816614" CREATED="1606220445921" MODIFIED="1606220447115"/>
<node TEXT="load" ID="ID_336282660" CREATED="1606220447528" MODIFIED="1606220448635"/>
<node TEXT="loadend" ID="ID_555575172" CREATED="1606220449057" MODIFIED="1606220451387"/>
<node TEXT="loadstart" ID="ID_1015659373" CREATED="1606220451665" MODIFIED="1606220453940"/>
<node TEXT="progress" ID="ID_1860767231" CREATED="1606220454392" MODIFIED="1606220456924"/>
<node TEXT="timeout" ID="ID_478026702" CREATED="1606220457913" MODIFIED="1606220459203"/>
</node>
<node TEXT="Update" FOLDED="true" ID="ID_1142626665" CREATED="1606220462841" MODIFIED="1606220464963">
<node TEXT="checking" ID="ID_1884472169" CREATED="1606220465913" MODIFIED="1606220469868"/>
<node TEXT="downloading" ID="ID_739794718" CREATED="1606220472185" MODIFIED="1606220477308"/>
<node TEXT="error" ID="ID_197662375" CREATED="1606220477937" MODIFIED="1606220479163"/>
<node TEXT="noupdate" ID="ID_1898977192" CREATED="1606220479304" MODIFIED="1606220480988"/>
<node TEXT="updateready" ID="ID_264511762" CREATED="1606220481409" MODIFIED="1606220486819"/>
</node>
<node TEXT="Value Change" FOLDED="true" ID="ID_1607202194" CREATED="1606220488865" MODIFIED="1606897865066">
<font BOLD="true"/>
<node TEXT="broadcast" ID="ID_776211612" CREATED="1606220497017" MODIFIED="1606220500027"/>
<node TEXT="CheckboxStateChange" ID="ID_1591536115" CREATED="1606220500357" MODIFIED="1606220505588"/>
<node TEXT="hashchange" ID="ID_1157783999" CREATED="1606220506097" MODIFIED="1606220509331"/>
<node TEXT="input" ID="ID_323790540" CREATED="1606220509657" MODIFIED="1606220511396"/>
<node TEXT="RadioStateChange" ID="ID_1390314923" CREATED="1606220511993" MODIFIED="1606220516827"/>
<node TEXT="readystatechange" ID="ID_304216807" CREATED="1606220517161" MODIFIED="1606220522924"/>
<node TEXT="ValueChange" ID="ID_1491276724" CREATED="1606220523361" MODIFIED="1606897875733">
<font BOLD="true"/>
</node>
</node>
<node TEXT="Uncategorized" FOLDED="true" ID="ID_58014470" CREATED="1606220534225" MODIFIED="1606220540260">
<node TEXT="invalid" ID="ID_529133609" CREATED="1606220546721" MODIFIED="1606220548419"/>
<node TEXT="message" ID="ID_460377596" CREATED="1606220548569" MODIFIED="1606220551436"/>
<node TEXT="open" ID="ID_1093951503" CREATED="1606220551961" MODIFIED="1606220553212"/>
<node TEXT="show" ID="ID_750409317" CREATED="1606220553329" MODIFIED="1606220554395"/>
</node>
<node TEXT="Less Common and non-standard Events" FOLDED="true" ID="ID_177562759" CREATED="1606220638217" MODIFIED="1606220648564">
<node TEXT="Window" ID="ID_1154383800" CREATED="1606220568946" MODIFIED="1606220571612">
<node TEXT="close" ID="ID_710520918" CREATED="1606220572569" MODIFIED="1606220573668"/>
</node>
<node TEXT="Popup" FOLDED="true" ID="ID_1190844137" CREATED="1606220576241" MODIFIED="1606220579396">
<node TEXT="popuphidden" ID="ID_1380322568" CREATED="1606220580401" MODIFIED="1606220585443"/>
<node TEXT="popuphiding" ID="ID_269224027" CREATED="1606220585825" MODIFIED="1606220591836"/>
<node TEXT="popupshowing" ID="ID_1643493308" CREATED="1606220592729" MODIFIED="1606220594939"/>
<node TEXT="popupshown" ID="ID_1776022413" CREATED="1606220596761" MODIFIED="1606220599436"/>
</node>
<node TEXT="Tab" FOLDED="true" ID="ID_1698476104" CREATED="1606220601785" MODIFIED="1606220605980">
<node TEXT="visibilitychange" ID="ID_1364787001" CREATED="1606220606561" MODIFIED="1606220610588"/>
</node>
<node TEXT="Battery" ID="ID_1707708817" CREATED="1606220619025" MODIFIED="1606220621235"/>
<node TEXT="Call" ID="ID_1452277580" CREATED="1606220621641" MODIFIED="1606220624939"/>
<node TEXT="Sensor" ID="ID_368504281" CREATED="1606220626905" MODIFIED="1606220628172"/>
<node TEXT="..." ID="ID_248199014" CREATED="1606220652801" MODIFIED="1606220654076"/>
</node>
</node>
</node>
<node TEXT="Terminology" FOLDED="true" ID="ID_1933630139" CREATED="1608224957855" MODIFIED="1608224971075">
<node TEXT="EventHandler" ID="ID_521946772" CREATED="1608224981288" MODIFIED="1608224983850"/>
<node TEXT="EventListener" ID="ID_1880471220" CREATED="1608224984183" MODIFIED="1608224987241"/>
<node TEXT="Event Bubbling" FOLDED="true" ID="ID_214520722" CREATED="1608224869343" MODIFIED="1608224873187">
<node TEXT="Phases" ID="ID_409370276" CREATED="1608224874326" MODIFIED="1608224877274">
<node TEXT="Capture" ID="ID_1529822190" CREATED="1608224878214" MODIFIED="1608224880545"/>
<node TEXT="Bubbling" ID="ID_1083792512" CREATED="1608224880719" MODIFIED="1608224884169"/>
</node>
</node>
<node TEXT="Event Types" FOLDED="true" ID="ID_866850115" CREATED="1608224991327" MODIFIED="1608224997531">
<node TEXT="User Events" ID="ID_288959838" CREATED="1606215890530" MODIFIED="1606215893813"/>
<node TEXT="Browser Events" ID="ID_1154467125" CREATED="1606215894234" MODIFIED="1606215897918"/>
</node>
</node>
</node>
<node TEXT="Libraries" FOLDED="true" POSITION="right" ID="ID_862613355" CREATED="1606998796810" MODIFIED="1606998802850">
<edge COLOR="#ff00ff"/>
<node TEXT="Modules" FOLDED="true" ID="ID_861249178" CREATED="1607501843559" MODIFIED="1607501849342">
<node TEXT="Providing functionality in small encapsulated bundles." ID="ID_1779651826" CREATED="1607501889539" MODIFIED="1607501921408"/>
<node TEXT="ES6: import/export&#xa;HTML: &lt;script type=&quot;module&quot; src=&quot;FILENAME&quot;&gt;&#xa;=&gt; in order support older browser &quot;transpiling&quot; is needed&#xa;      e. g. transpile with &quot;babel&quot;" ID="ID_1187068324" CREATED="1607501927971" MODIFIED="1607502078246"/>
<node TEXT="Continueing with an already existing project:&#xa;$&gt; npm install&#xa;installs dependencies recursively (specified in package.json)" ID="ID_1304461208" CREATED="1607501921670" MODIFIED="1607502289824"/>
</node>
<node TEXT="jQuery" FOLDED="true" ID="ID_396276590" CREATED="1606998811531" MODIFIED="1606998888301"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Javascript Library
    </p>
    <p>
      - manipulate DOM
    </p>
    <p>
      - allows interacting with the DOM via kind of css-selector
    </p>
  </body>
</html>
</richcontent>
<node TEXT="Links" ID="ID_1516986592" CREATED="1606999858930" MODIFIED="1606999860583">
<node TEXT="https://en.wikipedia.org/wiki/JQuery" ID="ID_1484343406" CREATED="1606999925358" MODIFIED="1606999925358" LINK="https://en.wikipedia.org/wiki/JQuery"/>
<node TEXT="https://jquery.com/" ID="ID_168717078" CREATED="1606999944143" MODIFIED="1606999944143" LINK="https://jquery.com/"/>
<node TEXT="https://learn.jquery.com/about-jquery/how-jquery-works/" ID="ID_43313932" CREATED="1606999907068" MODIFIED="1606999907068" LINK="https://learn.jquery.com/about-jquery/how-jquery-works/"/>
<node TEXT="Cheatsheet: https://oscarotero.com/jquery/" ID="ID_1186687560" CREATED="1607000070355" MODIFIED="1607000080232" LINK="https://oscarotero.com/jquery/"/>
</node>
<node TEXT="Selector" ID="ID_139500400" CREATED="1606998890265" MODIFIED="1606998896877"/>
<node TEXT="DOM interaction" FOLDED="true" ID="ID_164244827" CREATED="1606998897444" MODIFIED="1606998902343">
<node TEXT="change" ID="ID_557895489" CREATED="1606998908879" MODIFIED="1606998914703">
<node TEXT="add" ID="ID_1135582219" CREATED="1606998927194" MODIFIED="1606998929518"/>
<node TEXT="add EventListeners" ID="ID_1287593937" CREATED="1606998949902" MODIFIED="1606998956099"/>
<node TEXT="remove" ID="ID_1236787806" CREATED="1606998931554" MODIFIED="1606998934698"/>
<node TEXT="styles via addClass" ID="ID_1379097021" CREATED="1606999002157" MODIFIED="1606999017118"/>
</node>
<node TEXT="read" ID="ID_239037401" CREATED="1606998914945" MODIFIED="1606998922055"/>
<node TEXT="retrieve resources" ID="ID_433816985" CREATED="1606998971657" MODIFIED="1606998984921">
<node TEXT="get" ID="ID_1224918247" CREATED="1606998990246" MODIFIED="1606998993472"/>
<node TEXT="load" ID="ID_1287836767" CREATED="1606998994870" MODIFIED="1606998996372"/>
</node>
</node>
</node>
<node TEXT="Handlebars" FOLDED="true" ID="ID_1480059931" CREATED="1606998816690" MODIFIED="1606999199477"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Template Engine in a library
    </p>
  </body>
</html>
</richcontent>
<node TEXT="Links" ID="ID_429726623" CREATED="1606999987386" MODIFIED="1606999988989">
<node TEXT="https://handlebarsjs.com/" ID="ID_1686246253" CREATED="1606999993653" MODIFIED="1606999993653" LINK="https://handlebarsjs.com/"/>
<node TEXT="https://handlebarsjs.com/guide/" ID="ID_1364085350" CREATED="1607000004629" MODIFIED="1607000004629" LINK="https://handlebarsjs.com/guide/"/>
</node>
<node TEXT="template" FOLDED="true" ID="ID_736896615" CREATED="1606999042141" MODIFIED="1606999254138">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_195068196" STARTINCLINATION="224;0;" ENDINCLINATION="224;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<node TEXT="{{ PLACEHOLDER_NAME }}" ID="ID_959664492" CREATED="1606999212122" MODIFIED="1606999235548"/>
</node>
<node TEXT="compile a template to a template-function" ID="ID_195068196" CREATED="1606999064187" MODIFIED="1606999261367">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_384910861" STARTINCLINATION="166;0;" ENDINCLINATION="166;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT="template-function" ID="ID_384910861" CREATED="1606999082245" MODIFIED="1606999422367"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Use template-function and provide it with an OBJECT, that &quot;fullfills&quot; the interface the template describes. The template by the names of its placeholders, specifies the names of the attributes the OBJECT must have.
    </p>
    <p>
      
    </p>
    <p>
      It will return the rendered template.
    </p>
  </body>
</html>
</richcontent>
</node>
<node TEXT="It is also possible to loop over an array." FOLDED="true" ID="ID_1764804864" CREATED="1606999427221" MODIFIED="1606999500548">
<node TEXT="{{#each ATTR_NAME}}&#xa;    this.ATTR_B_NAME&#xa;{{/each}}" ID="ID_1946343116" CREATED="1606999502070" MODIFIED="1606999600013"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Inside of the loop &quot;this&quot; refers to the current element of the array.
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
</node>
<node TEXT="Sandbox" POSITION="right" ID="ID_1275827979" CREATED="1606215857602" MODIFIED="1606215860422">
<edge COLOR="#0000ff"/>
</node>
<node TEXT="Javascript" FOLDED="true" POSITION="right" ID="ID_1027574476" CREATED="1608193239975" MODIFIED="1608193243308">
<edge COLOR="#00ffff"/>
<node TEXT="Promise" ID="ID_565472553" CREATED="1608193247630" MODIFIED="1608193312178"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      asynchronous/parallel calls/execution of code
    </p>
    <p>
      - Multithreading
    </p>
  </body>
</html>
</richcontent>
<node TEXT="new Promise()" ID="ID_1016660334" CREATED="1608193328836" MODIFIED="1608193811343">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_966408088" STARTINCLINATION="40;0;" ENDINCLINATION="40;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      new Promise( (resolve, reject) =&gt; {
    </p>
    <p>
      &#160;&#160;&#160;&#160;// call resolve() or reject() depending on success or failure
    </p>
    <p>
      })
    </p>
  </body>
</html>
</richcontent>
</node>
<node TEXT="pending Promise" ID="ID_966408088" CREATED="1608193394444" MODIFIED="1608193446000">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_487145174" STARTINCLINATION="73;0;" ENDINCLINATION="73;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1711583186" STARTINCLINATION="53;0;" ENDINCLINATION="53;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT=".resolve()" ID="ID_1711583186" CREATED="1608193346434" MODIFIED="1608193462602">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1041379083" STARTINCLINATION="46;0;" ENDINCLINATION="46;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT=".reject()" ID="ID_487145174" CREATED="1608193355178" MODIFIED="1608193478295">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_1041379083" STARTINCLINATION="40;0;" ENDINCLINATION="40;0;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
<node TEXT="settled" ID="ID_1041379083" CREATED="1608193413760" MODIFIED="1608193416454"/>
<node TEXT=".then(resolvedCallback[, rejectedCallback])" ID="ID_1958935916" CREATED="1608193508801" MODIFIED="1608193578408"/>
<node TEXT=".catch(rejectedCallback)" ID="ID_1852558639" CREATED="1608193512246" MODIFIED="1608193619304"/>
<node TEXT=".finally(callback)" ID="ID_1034916502" CREATED="1608193635707" MODIFIED="1608193682719"/>
</node>
<node TEXT="async/await" ID="ID_1396154974" CREATED="1608193838776" MODIFIED="1608193852647">
<node TEXT="async function FUNCTION_NAME() {&#xa;   // this function will execute asynchronously&#xa;   // and it will return by default a resolved Promise&#xa;}" ID="ID_184926447" CREATED="1608193864344" MODIFIED="1608193958510"/>
<node TEXT="&quot;await&quot; keyword is available inside of an async function" ID="ID_1251008659" CREATED="1608193959468" MODIFIED="1608194205143"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      async function A() {}
    </p>
    <p>
      
    </p>
    <p>
      async function B() {
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;await A(); // will wait until &quot;A&quot; returns
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;let value = await A(); // same here: will wait until &quot;A&quot; returns, but with an additional assignment
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;....
    </p>
    <p>
      }
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
<node TEXT="Links" FOLDED="true" POSITION="right" ID="ID_537263944" CREATED="1608224245164" MODIFIED="1608224246847">
<edge COLOR="#00007c"/>
<node TEXT="https://github.com/kamranahmedse/developer-roadmap" ID="ID_921180060" CREATED="1608224249422" MODIFIED="1608224249422" LINK="https://github.com/kamranahmedse/developer-roadmap"/>
<node TEXT="RFC 2616 - HTTP/1.1" ID="ID_720724966" CREATED="1608224734727" MODIFIED="1608224758110" LINK="https://tools.ietf.org/html/rfc2616"/>
</node>
</node>
</map>
