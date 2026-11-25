/* All translations are local. No translation service or GitHub API. */
const SP_LANGS = [['en','English'],['pt-BR','Português (Brasil)'],['de','Deutsch'],['ja','日本語'],['es','Español'],['fr','Français'],['zh','中文'],['ru','Русский']];
const SP_PAGE = {};
function spPage(lang, raw){SP_PAGE[lang]=raw.trim().split('\n').map(x=>x.trim());}
// Each line is one text element; order is shared by all languages.
spPage('en', `
ARSHA FLORA · BLENDER ADD-ON
Choose your language
Draw. Scatter. Create.
Turn any mesh surface into a canvas. Place your own assets with four intuitive drawing modes, shape natural distributions, and manage complex scenes with greater control. For Blender 4.2+.
LINKED INSTANCES · BUILT FOR LARGE SCENES
More objects. No duplicate mesh geometry.
Surface Pencil links scattered instances to the original mesh instead of creating a separate copy of its geometry for every instance. Scatter 1,000 instances without storing 1,000 copies of the original mesh. Only the additional scatter data, such as positions and transforms, needs to be stored.
Wire Box Preview
Replace detailed instance previews with lightweight wire boxes while you work. This can dramatically reduce viewport drawing overhead and make dense environments much easier to navigate. Actual performance depends on the scene.
500 instances. Just a few extra kilobytes.
In the demonstration, scattering 500 linked instances adds only a few kilobytes of scatter data. By comparison, a single ordinary duplicate in Blender increases the file size by 30% in this particular test. Results vary with mesh complexity and scene settings.
Five powerful features. One intuitive workflow.
Four ways to scatter.
Outline a region, trace a path, paint coverage with an adjustable brush radius, or scatter across the entire mesh. Choose the method that fits your scene.
Fine-tune every edge.
Increase or reduce density near boundaries, shorten instances toward the border, and refine your area scatter with additional edge controls.
Natural variation, full control.
Add random rotation and random scale to avoid repetition. Adjust overall scale and height above the surface to dial in the exact appearance of your scatter.
Big scenes. Lighter geometry.
Use a simple plane with a tree texture and transparency instead of a fully modeled tree. Face Camera keeps the scattered planes oriented toward the camera, creating convincing silhouettes with much less geometry. Especially useful for dense backgrounds.
Smart elevation. Lighter viewport.
Fine-tune placement across different elevations, then switch to a lightweight box-style preview to work without drawing every detailed mesh at once.
Explore every control.
Scroll inside the interactive panel below to discover Surface Pencil's features.
Move your cursor outside the panel to continue scrolling the product page at any time.
Continue exploring ↓
Made for artists worldwide.
Work in the language that feels right for you. Surface Pencil supports eight interface languages, so you can focus on creating rather than translating controls.
Need help? Our support email is available directly inside Surface Pencil. We're ready to answer your questions about the add-on and your workflow.
Growing Together with Blender.
Our team grew alongside Blender, and this incredible software has been an essential part of our creative journey. Everything we create comes from our passion for Blender and our dedication to its community.
Our mission is to develop intuitive tools, make creativity more accessible, and help build a bigger, stronger and more inspiring community around the software we love.
Thank you for staying with us until the very end. Your support means the world to us.
WITH LOVE, ARSHA FLORA
Preview unavailable
FEATURE
`);
spPage('pt-BR', `
ARSHA FLORA · ADD-ON PARA BLENDER
Escolha seu idioma
Desenhe. Distribua. Crie.
Transforme qualquer superfície de malha em uma tela. Distribua seus próprios objetos com quatro modos intuitivos, crie distribuições naturais e controle cenas complexas. Para Blender 4.2+.
INSTÂNCIAS VINCULADAS · PARA GRANDES CENAS
Mais objetos. Sem duplicar a geometria.
O Surface Pencil vincula as instâncias à malha original, em vez de criar uma cópia separada da geometria para cada objeto. Distribua 1.000 instâncias sem armazenar 1.000 cópias da malha. Apenas dados adicionais, como posições e transformações, precisam ser armazenados.
Prévia em caixas de arame
Substitua a visualização detalhada das instâncias por caixas leves enquanto trabalha. Isso pode reduzir muito o custo de exibição na viewport e facilitar a navegação em cenas densas. O desempenho depende da cena.
500 instâncias. Apenas alguns quilobytes a mais.
Na demonstração, distribuir 500 instâncias vinculadas acrescenta apenas alguns quilobytes de dados. Em comparação, uma duplicação comum no Blender aumenta o tamanho do arquivo em 30% neste teste. Os resultados variam com a complexidade da malha e as configurações.
Cinco recursos poderosos. Um fluxo intuitivo.
Quatro formas de distribuir.
Contorne uma região, trace um caminho, pinte com um pincel de raio ajustável ou distribua objetos por toda a malha. Escolha o método ideal para sua cena.
Ajuste cada borda.
Aumente ou reduza a densidade perto dos limites, diminua o tamanho das instâncias nas bordas e refine a distribuição com controles adicionais.
Variação natural, controle total.
Adicione rotação e escala aleatórias para evitar repetições. Ajuste a escala geral e a altura acima da superfície para obter o resultado desejado.
Grandes cenas. Geometria mais leve.
Use um plano com textura de árvore e transparência no lugar de uma árvore modelada. Face Camera mantém os planos voltados para a câmera, criando silhuetas convincentes com muito menos geometria. Ideal para fundos densos.
Altura inteligente. Viewport mais leve.
Ajuste a distribuição em diferentes alturas e use a prévia em caixas para trabalhar sem exibir toda a geometria detalhada ao mesmo tempo.
Explore cada controle.
Role dentro do painel interativo abaixo para descobrir os recursos do Surface Pencil.
Mova o cursor para fora do painel para continuar rolando a página a qualquer momento.
Continue explorando ↓
Feito para artistas do mundo todo.
Trabalhe no idioma de sua preferência. O Surface Pencil oferece oito idiomas de interface para você se concentrar na criação.
Precisa de ajuda? Nosso e-mail de suporte está disponível no próprio Surface Pencil. Estamos prontos para responder às suas dúvidas sobre o add-on e seu fluxo de trabalho.
Crescendo juntos com o Blender.
Nossa equipe cresceu com o Blender, parte essencial da nossa jornada criativa. Tudo o que criamos nasce da nossa paixão pelo Blender e da dedicação à comunidade.
Nossa missão é desenvolver ferramentas intuitivas, tornar a criatividade mais acessível e ajudar a construir uma comunidade maior, mais forte e inspiradora.
Obrigado por nos acompanhar até o fim. Seu apoio significa muito para nós.
COM CARINHO, ARSHA FLORA
Prévia indisponível
RECURSO
`);
spPage('de', `
ARSHA FLORA · BLENDER-ADD-ON
Sprache wählen
Zeichnen. Verteilen. Gestalten.
Verwandle jede Mesh-Oberfläche in eine Leinwand. Platziere eigene Objekte mit vier intuitiven Modi, gestalte natürliche Verteilungen und behalte komplexe Szenen im Griff. Für Blender 4.2+.
VERKNÜPFTE INSTANZEN · FÜR GROSSE SZENEN
Mehr Objekte. Keine doppelte Mesh-Geometrie.
Surface Pencil verknüpft die Instanzen mit dem ursprünglichen Mesh, statt für jede Instanz eine eigene Geometriekopie anzulegen. Verteile 1.000 Instanzen, ohne 1.000 Kopien des Meshs zu speichern. Nur zusätzliche Verteilungsdaten wie Positionen und Transformationen müssen gespeichert werden.
Drahtbox-Vorschau
Ersetze die detailreiche Instanzvorschau beim Arbeiten durch einfache Drahtboxen. Das kann den Darstellungsaufwand im Viewport erheblich reduzieren und die Navigation in dichten Szenen erleichtern. Die Leistung hängt von der Szene ab.
500 Instanzen. Nur wenige Kilobyte mehr.
In der Demonstration benötigt die Verteilung von 500 verknüpften Instanzen nur wenige zusätzliche Kilobyte. Ein einziges normales Duplikat in Blender erhöht die Dateigröße in diesem Test dagegen um 30 %. Ergebnisse variieren je nach Mesh-Komplexität und Szeneneinstellungen.
Fünf starke Funktionen. Ein intuitiver Workflow.
Vier Arten der Verteilung.
Zeichne eine Fläche oder einen Pfad, male mit verstellbarem Pinselradius oder verteile Objekte auf dem gesamten Mesh. Wähle den passenden Modus.
Jede Kante fein abstimmen.
Erhöhe oder reduziere die Dichte am Rand, verkleinere Instanzen an Grenzen und verfeinere die Flächenverteilung mit weiteren Randreglern.
Natürliche Vielfalt, volle Kontrolle.
Vermeide Wiederholungen mit zufälliger Rotation und Skalierung. Passe die Gesamtskalierung und den Abstand zur Oberfläche an.
Große Szenen. Leichtere Geometrie.
Verwende eine Ebene mit Baumtextur und Transparenz statt eines vollständig modellierten Baums. Face Camera richtet die Ebenen zur Kamera aus und erzeugt überzeugende Silhouetten mit deutlich weniger Geometrie. Besonders für dichte Hintergründe.
Gezielte Höhen. Leichterer Viewport.
Steuere die Platzierung in verschiedenen Höhen und nutze eine vereinfachte Box-Vorschau, um ohne die gleichzeitige Darstellung aller detaillierten Meshs zu arbeiten.
Entdecke alle Regler.
Scrolle im interaktiven Bereich unten, um die Funktionen von Surface Pencil zu entdecken.
Bewege den Cursor aus dem Bereich heraus, um jederzeit auf der Produktseite weiterzuscrollen.
Weiter entdecken ↓
Für Künstler weltweit.
Arbeite in deiner bevorzugten Sprache. Surface Pencil bietet acht Oberflächensprachen, damit du dich auf deine Kreativität konzentrieren kannst.
Brauchst du Hilfe? Unsere Support-E-Mail ist direkt in Surface Pencil verfügbar. Wir beantworten gerne Fragen zum Add-on und zu deinem Workflow.
Gemeinsam mit Blender wachsen.
Unser Team ist mit Blender gewachsen. Diese Software ist ein wichtiger Teil unserer kreativen Reise. Alles, was wir entwickeln, entsteht aus unserer Leidenschaft für Blender und seiner Community.
Wir wollen intuitive Werkzeuge entwickeln, Kreativität zugänglicher machen und eine größere, stärkere und inspirierendere Community aufbauen.
Danke, dass du uns bis zum Ende begleitet hast. Deine Unterstützung bedeutet uns sehr viel.
MIT LIEBE, ARSHA FLORA
Vorschau nicht verfügbar
FUNKTION
`);
spPage('ja', `
ARSHA FLORA · BLENDER アドオン
言語を選択
描く。配置する。創造する。
あらゆるメッシュ表面をキャンバスに。4つの直感的な描画モードで独自のアセットを配置し、自然な分布を作り、複雑なシーンをコントロールできます。Blender 4.2以降に対応。
リンクインスタンス · 大規模シーン向け
オブジェクトを増やしても、メッシュ形状は複製しません。
Surface Pencil は各インスタンスに個別の形状をコピーせず、元のメッシュにリンクします。1,000個配置しても元のメッシュを1,000個分保存する必要はありません。位置や変換などの追加配置データのみを保存します。
ワイヤーボックスプレビュー
作業中は詳細なインスタンス表示を軽量なワイヤーボックスに置き換えます。ビューポートの描画負荷を大きく減らし、密集したシーンの操作を快適にできます。実際の性能はシーンに依存します。
500インスタンス。増加はわずか数KB。
デモでは500個のリンクインスタンスを配置しても、追加データは数KBです。対照的に、このテストで通常の複製を1回行うとファイルサイズが30%増加しました。結果はメッシュの複雑さとシーン設定により異なります。
5つの強力な機能。直感的なワークフロー。
4つの配置モード。
領域を囲む、パスを描く、半径を調整できるブラシで塗る、またはメッシュ全体に配置する。シーンに適した方法を選べます。
境界を細かく調整。
境界付近の密度を増減し、端のインスタンスを小さくし、追加の境界設定で領域内の分布を調整できます。
自然な変化、自在な調整。
ランダムな回転とスケールで繰り返し感を抑えます。全体スケールや表面からの高さも調整できます。
大規模シーンを、軽量な形状で。
詳細な樹木モデルの代わりに、透過付きの樹木テクスチャを貼った平面を使用。Face Camera で各平面をカメラに向け、少ない形状で自然なシルエットを作ります。密集した背景に最適です。
高さの制御。軽量なビューポート。
標高に応じて配置を調整し、簡易ボックス表示に切り替えることで、詳細なメッシュをすべて描画せずに作業できます。
すべてのコントロールを体験。
下のインタラクティブパネル内をスクロールして、Surface Pencil の機能をご覧ください。
カーソルをパネルの外に移動すると、いつでも製品ページのスクロールに戻れます。
さらに見る ↓
世界中のアーティストのために。
使い慣れた言語で制作しましょう。Surface Pencil は8言語のインターフェースに対応し、創作に集中できるよう支援します。
お困りですか？Surface Pencil 内からサポートメールをご利用いただけます。アドオンやワークフローについての質問にお答えします。
Blender とともに成長する。
私たちのチームは Blender とともに成長してきました。この素晴らしいソフトウェアは創作活動の大切な一部です。制作の原動力は Blender とそのコミュニティへの情熱です。
直感的なツールを開発し、創造性をより身近なものにし、より大きく力強いコミュニティを築くことが私たちの使命です。
最後までお付き合いいただき、ありがとうございます。皆様のご支援が私たちの力になります。
愛を込めて、ARSHA FLORA
プレビューを表示できません
機能
`);
spPage('es', `
ARSHA FLORA · COMPLEMENTO PARA BLENDER
Elige tu idioma
Dibuja. Distribuye. Crea.
Convierte cualquier superficie de malla en un lienzo. Coloca tus propios recursos con cuatro modos intuitivos, crea distribuciones naturales y controla escenas complejas. Para Blender 4.2+.
INSTANCIAS VINCULADAS · PARA GRANDES ESCENAS
Más objetos. Sin duplicar la geometría.
Surface Pencil vincula las instancias a la malla original en lugar de copiar su geometría para cada una. Distribuye 1.000 instancias sin guardar 1.000 copias de la malla. Solo se almacenan datos adicionales, como posiciones y transformaciones.
Vista previa en cajas de alambre
Sustituye las vistas detalladas por cajas ligeras mientras trabajas. Esto puede reducir considerablemente la carga de dibujo de la vista 3D y facilitar la navegación en escenas densas. El rendimiento depende de la escena.
500 instancias. Solo unos kilobytes adicionales.
En la demostración, distribuir 500 instancias vinculadas añade únicamente unos kilobytes de datos. En cambio, una sola duplicación normal en Blender aumenta el tamaño del archivo un 30% en esta prueba. Los resultados dependen de la complejidad de la malla y la configuración.
Cinco funciones potentes. Un flujo intuitivo.
Cuatro formas de distribuir.
Delimita una región, traza un camino, pinta con un pincel de radio ajustable o distribuye objetos en toda la malla. Elige el método ideal para tu escena.
Ajusta cada borde.
Aumenta o reduce la densidad cerca de los límites, reduce el tamaño de las instancias en los bordes y afina la distribución con controles adicionales.
Variación natural, control total.
Añade rotación y escala aleatorias para evitar repeticiones. Ajusta la escala global y la altura sobre la superficie para obtener el resultado deseado.
Grandes escenas. Geometría más ligera.
Utiliza un plano con textura de árbol y transparencia en vez de un árbol totalmente modelado. Face Camera orienta los planos hacia la cámara para crear siluetas convincentes con mucha menos geometría, especialmente en fondos densos.
Altura inteligente. Vista 3D más ligera.
Ajusta la distribución a distintas alturas y cambia a una vista previa con cajas para trabajar sin dibujar todas las mallas detalladas a la vez.
Explora cada control.
Desplázate dentro del panel interactivo para descubrir las funciones de Surface Pencil.
Mueve el cursor fuera del panel para seguir desplazándote por la página del producto en cualquier momento.
Sigue explorando ↓
Para artistas de todo el mundo.
Trabaja en tu idioma preferido. Surface Pencil ofrece ocho idiomas de interfaz para que te concentres en crear.
¿Necesitas ayuda? Nuestro correo de soporte está disponible dentro de Surface Pencil. Estamos listos para responder a tus preguntas sobre el complemento y tu flujo de trabajo.
Creciendo juntos con Blender.
Nuestro equipo creció junto a Blender, una parte esencial de nuestro viaje creativo. Todo lo que creamos nace de nuestra pasión por Blender y su comunidad.
Nuestra misión es desarrollar herramientas intuitivas, acercar la creatividad a más personas y construir una comunidad más grande, fuerte e inspiradora.
Gracias por acompañarnos hasta el final. Tu apoyo significa muchísimo para nosotros.
CON CARIÑO, ARSHA FLORA
Vista previa no disponible
FUNCIÓN
`);
spPage('fr', `
ARSHA FLORA · EXTENSION BLENDER
Choisissez votre langue
Dessinez. Dispersez. Créez.
Transformez toute surface de maillage en toile. Placez vos propres objets grâce à quatre modes intuitifs, créez des distributions naturelles et maîtrisez vos scènes complexes. Pour Blender 4.2+.
INSTANCES LIÉES · POUR LES GRANDES SCÈNES
Plus d’objets. Sans dupliquer la géométrie.
Surface Pencil lie les instances au maillage original au lieu de copier sa géométrie pour chacune. Dispersez 1 000 instances sans stocker 1 000 copies du maillage. Seules les données supplémentaires, telles que les positions et transformations, doivent être enregistrées.
Aperçu en boîtes filaires
Remplacez les aperçus détaillés par des boîtes légères pendant le travail. Cela peut considérablement réduire la charge d’affichage dans la vue 3D et faciliter la navigation dans les scènes denses. Les performances dépendent de la scène.
500 instances. Seulement quelques kilo-octets de plus.
Dans la démonstration, la dispersion de 500 instances liées n’ajoute que quelques kilo-octets de données. En comparaison, une seule duplication ordinaire dans Blender augmente la taille du fichier de 30 % dans ce test. Les résultats varient selon la complexité du maillage et les réglages.
Cinq fonctions puissantes. Un flux intuitif.
Quatre façons de disperser.
Délimitez une zone, tracez un chemin, peignez avec un rayon de pinceau réglable ou dispersez sur tout le maillage. Choisissez la méthode adaptée à votre scène.
Affinez chaque bord.
Augmentez ou réduisez la densité près des limites, diminuez la taille des instances en bordure et affinez la distribution grâce aux réglages supplémentaires.
Variation naturelle, contrôle total.
Ajoutez une rotation et une échelle aléatoires pour éviter les répétitions. Ajustez l’échelle globale et la hauteur au-dessus de la surface pour obtenir le résultat souhaité.
Grandes scènes. Géométrie plus légère.
Utilisez un plan avec une texture d’arbre et de la transparence à la place d’un arbre modélisé. Face Camera oriente les plans vers la caméra, créant des silhouettes convaincantes avec bien moins de géométrie. Idéal pour les arrière-plans denses.
Altitude maîtrisée. Vue 3D allégée.
Ajustez la dispersion selon l’altitude, puis passez à un aperçu en boîtes pour travailler sans afficher tous les maillages détaillés en même temps.
Explorez chaque réglage.
Faites défiler le panneau interactif ci-dessous pour découvrir les fonctions de Surface Pencil.
Déplacez le curseur hors du panneau pour continuer à faire défiler la page du produit à tout moment.
Poursuivez la découverte ↓
Pour les artistes du monde entier.
Travaillez dans votre langue préférée. Surface Pencil propose huit langues d’interface pour vous permettre de vous concentrer sur la création.
Besoin d’aide ? Notre adresse e-mail d’assistance est disponible directement dans Surface Pencil. Nous sommes prêts à répondre à vos questions sur l’extension et votre flux de travail.
Grandir ensemble avec Blender.
Notre équipe a grandi avec Blender, un logiciel essentiel à notre parcours créatif. Toutes nos créations naissent de notre passion pour Blender et de notre engagement envers sa communauté.
Notre mission est de développer des outils intuitifs, de rendre la créativité plus accessible et de contribuer à une communauté plus grande, forte et inspirante.
Merci de nous avoir accompagnés jusqu’au bout. Votre soutien compte énormément pour nous.
AVEC AFFECTION, ARSHA FLORA
Aperçu indisponible
FONCTION
`);
spPage('zh', `
ARSHA FLORA · BLENDER 插件
选择语言
绘制。散布。创造。
将任意网格表面变成画布。使用四种直观的绘制模式放置自己的资产，创建自然分布，并更好地控制复杂场景。适用于 Blender 4.2 及以上版本。
链接实例 · 为大型场景打造
更多对象，无需复制网格几何体。
Surface Pencil 将散布实例链接到原始网格，而不是为每个实例创建单独的几何副本。散布 1,000 个实例无需存储 1,000 份网格副本，只需保存位置和变换等额外散布数据。
线框盒预览
工作时使用轻量级线框盒替代详细实例预览。这可以显著减少视口绘制负担，使密集场景更容易操作。实际性能取决于场景。
500 个实例，仅增加几 KB。
在演示中，散布 500 个链接实例仅增加几 KB 的数据。相比之下，在本次测试中，Blender 的一次普通复制使文件大小增加了 30%。结果随网格复杂度和场景设置而变化。
五项强大功能，一个直观流程。
四种散布方式。
绘制区域、描绘路径、使用可调半径的画笔涂绘，或在整个网格上散布。选择适合场景的方式。
精细调整每个边缘。
增加或减少边界附近的密度、缩小边缘实例，并利用更多边缘控制精细调整区域散布。
自然变化，全面控制。
使用随机旋转和随机缩放避免重复感。调整整体缩放及表面偏移高度，获得理想的散布效果。
大型场景，更轻量的几何体。
使用带透明树木纹理的平面代替完整树木模型。Face Camera 使散布平面始终朝向相机，用更少的几何体营造可信的轮廓，尤其适合密集背景。
智能高度控制，轻量视口。
按不同高度精细调整散布，并切换到简化盒式预览，无需同时绘制所有详细网格即可工作。
探索每项控制。
在下方交互面板内滚动，了解 Surface Pencil 的各项功能。
将鼠标移出面板即可随时继续滚动产品页面。
继续探索 ↓
为全球艺术家打造。
使用熟悉的语言进行创作。Surface Pencil 支持八种界面语言，让您专注于创作。
需要帮助？可直接在 Surface Pencil 中找到支持邮箱。我们随时准备回答有关插件和工作流程的问题。
与 Blender 共同成长。
我们的团队与 Blender 一起成长。这款出色的软件是我们创作历程的重要组成部分。所有作品都源自我们对 Blender 和其社区的热爱。
我们的使命是开发直观工具，让创作更容易，并为建立更庞大、更强大、更具启发性的社区贡献力量。
感谢您陪伴我们直到最后。您的支持对我们意义非凡。
诚挚致意，ARSHA FLORA
预览不可用
功能
`);
spPage('ru', `
ARSHA FLORA · ДОПОЛНЕНИЕ ДЛЯ BLENDER
Выберите язык
Рисуйте. Распределяйте. Создавайте.
Превратите любую поверхность меша в холст. Размещайте свои объекты в четырёх интуитивных режимах, создавайте естественные распределения и управляйте сложными сценами. Для Blender 4.2+.
СВЯЗАННЫЕ ЭКЗЕМПЛЯРЫ · ДЛЯ БОЛЬШИХ СЦЕН
Больше объектов. Без копирования геометрии.
Surface Pencil связывает экземпляры с исходным мешем, не создавая отдельную копию геометрии для каждого объекта. Разместите 1 000 экземпляров без хранения 1 000 копий меша. Сохраняются только дополнительные данные распределения, например позиции и трансформации.
Каркасные боксы
Замените детальное отображение экземпляров лёгкими каркасными боксами во время работы. Это может значительно снизить нагрузку на отрисовку и облегчить навигацию в плотных сценах. Производительность зависит от сцены.
500 экземпляров. Всего несколько лишних килобайт.
В демонстрации размещение 500 связанных экземпляров добавляет всего несколько килобайт данных. Для сравнения, одно обычное дублирование в Blender увеличивает размер файла на 30% в этом тесте. Результаты зависят от сложности меша и настроек сцены.
Пять мощных функций. Один удобный процесс.
Четыре способа распределения.
Обведите область, нарисуйте путь, используйте кисть с регулируемым радиусом или заполните весь меш. Выберите подходящий режим.
Точная настройка краёв.
Увеличивайте или уменьшайте плотность у границ, уменьшайте размер экземпляров по краям и уточняйте распределение дополнительными настройками.
Естественное разнообразие, полный контроль.
Добавляйте случайное вращение и масштаб, чтобы избежать повторений. Настраивайте общий масштаб и высоту над поверхностью для нужного результата.
Большие сцены. Более лёгкая геометрия.
Используйте плоскость с прозрачной текстурой дерева вместо полноценной модели. Face Camera ориентирует плоскости к камере, создавая убедительные силуэты при меньшем количестве геометрии. Особенно удобно для плотных задних планов.
Контроль высоты. Лёгкий вьюпорт.
Настраивайте размещение на разных высотах и переключайтесь на упрощённое отображение боксами, чтобы работать без одновременной отрисовки всех детальных мешей.
Изучите каждый параметр.
Прокручивайте интерактивную панель ниже, чтобы познакомиться с функциями Surface Pencil.
Переместите курсор за пределы панели, чтобы продолжить прокрутку страницы продукта в любое время.
Продолжить знакомство ↓
Для художников всего мира.
Работайте на удобном языке. Surface Pencil поддерживает восемь языков интерфейса, чтобы вы могли сосредоточиться на творчестве.
Нужна помощь? Адрес поддержки доступен прямо в Surface Pencil. Мы готовы ответить на ваши вопросы о дополнении и рабочем процессе.
Растём вместе с Blender.
Наша команда выросла вместе с Blender. Эта замечательная программа стала важной частью нашего творческого пути. Всё, что мы создаём, рождается из любви к Blender и его сообществу.
Наша миссия — создавать интуитивные инструменты, делать творчество доступнее и помогать строить более крупное, сильное и вдохновляющее сообщество.
Спасибо, что были с нами до самого конца. Ваша поддержка очень важна для нас.
С ЛЮБОВЬЮ, ARSHA FLORA
Предпросмотр недоступен
ФУНКЦИЯ
`);
const SP_TOUR={};
function spTour(lang, ui, raw){SP_TOUR[lang]={ui:ui.split('|'),steps:raw.trim().split('\n').map(x=>x.split('|'))};}
// UI: tour title, scroll hint, Blender label, Back, Next, Restart, completion, progress template, aria image.
spTour('en','Surface Pencil · Feature Tour|Scroll inside this panel|BLENDER · SURFACE PENCIL|← Back|Next →|Restart ↺|Tour complete — scroll outside to continue.|Feature {n} of {total} · scroll to explore|Surface Pencil interface',``);
spTour('pt-BR','Surface Pencil · Tour de recursos|Role dentro deste painel|BLENDER · SURFACE PENCIL|← Voltar|Avançar →|Reiniciar ↺|Tour concluído — role fora do painel para continuar.|Recurso {n} de {total} · role para explorar|Interface do Surface Pencil',`
Malhas de origem|Seus objetos. Suas regras.|Escolha uma ou mais malhas e ajuste a quantidade de cada origem de forma independente.|Crie camadas com New Scatter Layer, selecione a superfície e adicione origens com Add Source.
Área|Desenhe uma área. Preencha naturalmente.|Contorne uma região da superfície para distribuir objetos dentro dos limites.|Ideal para canteiros e áreas delimitadas.
Caminho|Siga uma linha.|Desenhe um caminho para distribuir objetos ao longo dele.|Ideal para trilhas e bordas.
Pincel|Pinte livremente.|Pinte a cobertura diretamente sobre a superfície.|Ajuste o raio para traços estreitos ou largos.
Malha inteira|Cobertura total.|Distribua objetos por toda a malha selecionada.|Ideal para grandes terrenos.
Raio do pincel|Detalhes ou traços amplos.|Controle a largura da área pintada.|Use um raio pequeno para detalhes ou grande para cobertura ampla.
Mostrar pintura e contornos|Veja o que desenha.|Mostre ou oculte as regiões pintadas e seus contornos.|Mantenha as guias visíveis ou limpe a visualização.
Prévia em caixas de arame|Menos carga. Mais liberdade.|Exiba caixas simples no lugar de instâncias detalhadas.|Reduz a carga de desenho; o desempenho depende da cena.
Quantidade|Controle a quantidade.|Aumente ou diminua o número de pontos solicitados.|Os filtros podem reduzir a quantidade visível.
Semente|Uma nova distribuição.|Altere a semente para gerar outra distribuição aleatória sem redesenhar.|Experimente diferentes valores.
Espaçamento mínimo|Mais espaço entre objetos.|Defina a distância mínima entre pontos.|Distâncias maiores podem reduzir a quantidade de pontos.
Inclinação mínima / máxima|Siga o terreno.|Restrinja a distribuição a uma faixa de inclinações.|Escolha áreas planas ou íngremes.
Altura mínima / máxima|A elevação certa.|Limite a distribuição a uma faixa percentual de alturas.|Crie zonas de vegetação em diferentes elevações.
Centro / borda|Modele a distribuição.|Controle a concentração no interior ou na borda da região.|Ideal para composições centradas ou periféricas.
Suavidade da borda|Suavize os limites.|Refine a transição junto à borda.|Crie limites mais orgânicos.
Redução nas bordas|Refine a borda.|Ajuste o tratamento das instâncias próximas ao limite.|Combine com os demais controles de borda.
Aleatorizar tudo|Explore novas possibilidades.|Gere resultados aleatórios alternativos rapidamente.|Experimente variações na composição.
Distribuir / reconstruir|Construa sua distribuição.|Gere ou reconstrua o resultado com as configurações atuais.|Visible / Points mostra a quantidade visível e o total de pontos.
Transformação e variação|Cada instância, única.|Varie a rotação, a escala e a altura em relação à superfície.|Combine rotação e escala aleatórias para resultados naturais.
Câmera e desempenho|Grandes cenas. Menos geometria.|Face Camera orienta planos texturizados para a câmera.|Use transparência em planos com árvores; o resultado depende da cena e dos materiais.
Remover distribuição|Organize seu trabalho.|Remova distribuições que não são mais necessárias.|Gerencie suas camadas de distribuição.
Idioma da interface|Crie no seu idioma.|Surface Pencil oferece oito idiomas de interface.|Escolha seu idioma no add-on. Role fora do painel para continuar.
`);
spTour('de','Surface Pencil · Funktions-Tour|In diesem Bereich scrollen|BLENDER · SURFACE PENCIL|← Zurück|Weiter →|Neustart ↺|Tour beendet — außerhalb weiterscrollen.|Funktion {n} von {total} · zum Entdecken scrollen|Surface-Pencil-Oberfläche',`
Quell-Meshs|Deine Objekte. Deine Regeln.|Wähle ein oder mehrere Quellobjekte und steuere deren Anteil unabhängig voneinander.|Erstelle eine neue Ebene, wähle die Zieloberfläche und füge weitere Quellen hinzu.
Fläche|Zeichne eine Fläche.|Umreiße einen Bereich und verteile Objekte innerhalb seiner Grenzen.|Ideal für Beete und definierte Bereiche.
Pfad|Folge einer Linie.|Zeichne einen Pfad und verteile Objekte entlang der Linie.|Ideal für Wege und Ränder.
Pinsel|Male frei.|Male die Verteilung direkt auf die Oberfläche.|Passe den Radius für schmale oder breite Striche an.
Gesamtes Mesh|Eine Fläche. Volle Abdeckung.|Verteile Objekte über das gesamte ausgewählte Mesh.|Ideal für große Gelände.
Pinselradius|Feine Details. Breite Striche.|Bestimme die Größe des bemalten Bereichs.|Kleiner Radius für Details, großer für breite Abdeckung.
Malbereiche und Konturen|Sieh, was du zeichnest.|Blende gemalte Bereiche und Konturen ein oder aus.|Nutze Hilfslinien oder eine aufgeräumte Ansicht.
Drahtbox-Vorschau|Weniger Last. Mehr Freiheit.|Zeige einfache Drahtboxen statt detaillierter Instanzen an.|Die Darstellung wird leichter; die Leistung hängt von der Szene ab.
Anzahl|Steuere die Menge.|Erhöhe oder reduziere die gewünschte Anzahl der Verteilungspunkte.|Filter können die sichtbare Anzahl reduzieren.
Seed|Eine neue Anordnung.|Ändere den Seed für eine neue Zufallsverteilung ohne erneutes Zeichnen.|Probiere verschiedene Werte aus.
Mindestabstand|Mehr Platz zwischen Objekten.|Lege den kleinsten Abstand zwischen Verteilungspunkten fest.|Größere Abstände können die Punktzahl reduzieren.
Minimale / maximale Neigung|Folge dem Gelände.|Beschränke die Verteilung auf einen Neigungsbereich.|Wähle flache oder steile Bereiche.
Minimale / maximale Höhe|Auf der richtigen Höhe.|Begrenze die Platzierung auf einen prozentualen Höhenbereich.|Erstelle Vegetationszonen auf verschiedenen Höhen.
Mitte / Rand|Forme die Verteilung.|Beeinflusse die Konzentration im Inneren oder am Rand.|Für rand- oder zentrumsbetonte Anordnungen.
Randweichheit|Weiche Übergänge.|Passe die Weichheit der Verteilung am Rand an.|Erzeuge organische Übergänge.
Randverkleinerung|Verfeinere den Rand.|Steuere die Behandlung von Instanzen nahe der Grenze.|Kombiniere den Regler mit weiteren Randoptionen.
Alles randomisieren|Neue Möglichkeiten.|Erzeuge schnell alternative Zufallsergebnisse.|Experimentiere mit der Komposition.
Verteilen / neu aufbauen|Erstelle deine Verteilung.|Erzeuge oder erneuere die Verteilung mit den aktuellen Einstellungen.|Visible / Points zeigt sichtbare und gesamte Punkte.
Transformation und Variation|Jede Instanz ist einzigartig.|Variiere Rotation, Skalierung und Abstand zur Oberfläche.|Kombiniere zufällige Rotation und Skalierung.
Kamera und Leistung|Große Szenen. Weniger Geometrie.|Face Camera richtet texturierte Ebenen zur Kamera aus.|Nutze transparente Baumtexturen; Ergebnis und Leistung hängen von Szene und Material ab.
Verteilung entfernen|Ein sauberer Workflow.|Entferne nicht mehr benötigte Verteilungen.|Verwalte deine Verteilungsebenen.
Oberflächensprache|Gestalte in deiner Sprache.|Surface Pencil bietet acht Oberflächensprachen.|Wähle deine Sprache im Add-on. Scrolle außerhalb weiter.
`);
spTour('ja','Surface Pencil · 機能ツアー|パネル内をスクロール|BLENDER · SURFACE PENCIL|← 戻る|次へ →|最初から ↺|ツアー完了 — パネル外でスクロールを続けてください。|機能 {n} / {total} · スクロールして確認|Surface Pencil のインターフェース',`
ソースメッシュ|自分のアセットを自在に。|1つ以上のソースメッシュを選び、それぞれの配置量を個別に調整します。|新しいレイヤーを作成し、対象面を指定してソースを追加できます。
領域|領域を描いて配置。|表面上で領域を囲み、その内側にオブジェクトを配置します。|花壇や限定された範囲に最適です。
パス|線に沿って配置。|表面上にパスを描き、線に沿って配置します。|小道や境界線に適しています。
ブラシ|自由に塗って配置。|表面を直接ブラシで塗って配置します。|半径を調整して細い線や広い範囲を描けます。
メッシュ全体|表面全体をカバー。|選択したメッシュ全体に配置します。|広い地形をすばやくカバーできます。
ブラシ半径|細部から広範囲まで。|塗る範囲の大きさを調整します。|小さい半径は細部、大きい半径は広い範囲向けです。
ペイントと輪郭の表示|描いた範囲を確認。|ペイント領域と輪郭の表示を切り替えます。|ガイドを表示したり、非表示にして見やすくできます。
ワイヤーボックスプレビュー|負荷を軽く。自由に制作。|詳細なインスタンスの代わりに簡易ワイヤーボックスを表示します。|描画負荷を軽減できます。性能はシーンに依存します。
個数|配置数をコントロール。|要求する配置ポイント数を増減します。|フィルターによって表示数が減る場合があります。
シード|新しいランダム配置。|描き直さずにシード値を変えて別のランダム配置を生成します。|異なる値を試してみましょう。
最小間隔|オブジェクト間に余裕を。|配置ポイント間の最小距離を指定します。|距離を広げると配置数が減ることがあります。
最小・最大傾斜|地形に合わせる。|指定した傾斜範囲に配置を制限します。|平坦な場所や急斜面を選べます。
最小・最大高さ|適切な標高に配置。|高さのパーセント範囲で配置を制限します。|標高ごとに異なる植生帯を作れます。
中心・境界|分布を形作る。|領域の中心側または境界側への分布を調整します。|中心や縁を強調する構成に便利です。
境界の柔らかさ|境界を自然に。|境界付近の分布の変化を調整します。|自然な移行を作ります。
エッジ縮小|縁を調整。|境界付近のインスタンスの処理を調整します。|他の境界設定と組み合わせて使えます。
すべてランダム化|新しい可能性を探索。|別のランダムな結果をすばやく生成します。|構成のバリエーションを試しましょう。
散布・再構築|分布を生成。|現在の設定で散布を作成または再構築します。|Visible / Points は表示数と総ポイント数を示します。
変換とバリエーション|インスタンスに個性を。|回転、スケール、表面からの高さを調整します。|ランダムな回転とスケールで自然な分布に。
カメラとパフォーマンス|大規模シーンを軽量に。|Face Camera でテクスチャ付き平面をカメラに向けます。|透過樹木テクスチャを使用できます。結果はシーンと素材に依存します。
散布の削除|整理された作業環境。|不要な散布結果を削除します。|作成したレイヤーを管理できます。
インターフェース言語|自分の言語で制作。|Surface Pencil は8言語のインターフェースに対応します。|アドオンで言語を選択してください。パネル外でスクロールを続けられます。
`);
spTour('es','Surface Pencil · Recorrido de funciones|Desplázate dentro del panel|BLENDER · SURFACE PENCIL|← Atrás|Siguiente →|Reiniciar ↺|Recorrido completo — desplázate fuera del panel.|Función {n} de {total} · desplázate para explorar|Interfaz de Surface Pencil',`
Mallas de origen|Tus recursos. Tus reglas.|Elige una o más mallas y ajusta la cantidad de cada origen de forma independiente.|Crea una capa, selecciona la superficie y añade más orígenes.
Área|Dibuja una zona.|Delimita una región y distribuye objetos dentro de ella.|Ideal para parterres y zonas definidas.
Camino|Sigue una línea.|Dibuja un camino para distribuir objetos a lo largo de él.|Ideal para senderos y bordes.
Pincel|Pinta libremente.|Pinta la cobertura directamente sobre la superficie.|Ajusta el radio para trazos estrechos o amplios.
Malla completa|Cobertura total.|Distribuye objetos en toda la malla seleccionada.|Ideal para terrenos grandes.
Radio del pincel|Detalles o trazos amplios.|Controla el tamaño del área pintada.|Usa un radio pequeño para detalles y grande para cobertura amplia.
Mostrar pintura y contornos|Mira lo que dibujas.|Muestra u oculta las zonas pintadas y sus contornos.|Conserva las guías o despeja la vista.
Vista previa de cajas|Menos carga. Más libertad.|Muestra cajas de alambre simples en lugar de instancias detalladas.|Reduce la carga de dibujo; el rendimiento depende de la escena.
Cantidad|Controla la cantidad.|Aumenta o reduce el número de puntos solicitados.|Los filtros pueden reducir la cantidad visible.
Semilla|Una nueva distribución.|Cambia la semilla para generar otra distribución aleatoria sin redibujar.|Prueba diferentes valores.
Espaciado mínimo|Deja espacio entre objetos.|Define la distancia mínima entre puntos.|Una mayor distancia puede reducir la cantidad de puntos.
Pendiente mínima / máxima|Sigue el terreno.|Restringe la distribución a un intervalo de pendientes.|Selecciona áreas planas o empinadas.
Altura mínima / máxima|A la altura correcta.|Limita la colocación a un intervalo porcentual de alturas.|Crea zonas de vegetación a diferentes elevaciones.
Centro / borde|Da forma a la distribución.|Controla la concentración en el interior o el borde.|Útil para composiciones centradas o periféricas.
Suavidad del borde|Suaviza los límites.|Ajusta la transición cerca del borde.|Crea transiciones más orgánicas.
Reducción del borde|Afina el borde.|Controla el tratamiento de las instancias cercanas al límite.|Combina este ajuste con otros controles de borde.
Aleatorizar todo|Explora nuevas posibilidades.|Genera resultados aleatorios alternativos rápidamente.|Experimenta con variaciones de la composición.
Distribuir / reconstruir|Construye la distribución.|Genera o reconstruye el resultado con los ajustes actuales.|Visible / Points muestra los puntos visibles y totales.
Transformación y variación|Cada instancia, única.|Varía la rotación, escala y altura sobre la superficie.|Combina rotación y escala aleatorias para una cobertura natural.
Cámara y rendimiento|Grandes escenas. Menos geometría.|Face Camera orienta planos texturizados hacia la cámara.|Usa planos con texturas transparentes; el resultado depende de la escena y materiales.
Eliminar distribución|Un flujo limpio.|Elimina las distribuciones que ya no necesitas.|Gestiona tus capas de distribución.
Idioma de la interfaz|Crea en tu idioma.|Surface Pencil ofrece ocho idiomas de interfaz.|Elige tu idioma en el complemento. Desplázate fuera del panel para continuar.
`);
spTour('fr','Surface Pencil · Visite des fonctions|Défilez dans ce panneau|BLENDER · SURFACE PENCIL|← Retour|Suivant →|Recommencer ↺|Visite terminée — défilez hors du panneau.|Fonction {n} sur {total} · défilez pour explorer|Interface de Surface Pencil',`
Maillages sources|Vos objets. Vos règles.|Choisissez un ou plusieurs maillages et réglez séparément la quantité de chaque source.|Créez un calque, choisissez la surface et ajoutez des sources.
Zone|Dessinez une zone.|Délimitez une région et dispersez les objets à l’intérieur.|Idéal pour les massifs et zones définies.
Chemin|Suivez une ligne.|Tracez un chemin pour distribuer les objets le long de la ligne.|Idéal pour les allées et bordures.
Pinceau|Peignez librement.|Peignez la couverture directement sur la surface.|Ajustez le rayon pour des traits fins ou larges.
Maillage entier|Une couverture complète.|Dispersez sur tout le maillage sélectionné.|Idéal pour les grands terrains.
Rayon du pinceau|Des détails aux grands gestes.|Réglez la taille de la zone peinte.|Petit rayon pour les détails, grand rayon pour la couverture.
Afficher la peinture et les contours|Voyez ce que vous dessinez.|Affichez ou masquez les régions peintes et leurs contours.|Gardez les guides ou allégez la vue.
Aperçu en boîtes filaires|Moins de charge. Plus de liberté.|Affichez des boîtes filaires plutôt que des instances détaillées.|Réduit la charge d’affichage ; les performances dépendent de la scène.
Nombre|Maîtrisez la quantité.|Augmentez ou diminuez le nombre de points demandé.|Les filtres peuvent réduire le nombre visible.
Graine aléatoire|Une nouvelle disposition.|Changez la graine pour générer une autre distribution sans redessiner.|Essayez différentes valeurs.
Espacement minimal|Laissez respirer les objets.|Définissez la distance minimale entre les points.|Un espacement accru peut réduire le nombre de points.
Pente minimale / maximale|Suivez le terrain.|Limitez la dispersion à une plage d’inclinaisons.|Choisissez des zones plates ou pentues.
Hauteur minimale / maximale|À la bonne altitude.|Limitez la placement à une plage de hauteurs en pourcentage.|Créez des zones de végétation à différentes altitudes.
Centre / bord|Façonnez la distribution.|Ajustez la concentration vers l’intérieur ou la limite.|Utile pour les compositions centrées ou périphériques.
Douceur du bord|Adoucissez les limites.|Affinez la transition près des frontières.|Créez des transitions plus organiques.
Réduction des bords|Affinez le bord.|Ajustez le traitement des instances proches des limites.|Combinez ce réglage avec les autres options de bord.
Tout randomiser|Explorez de nouvelles possibilités.|Générez rapidement d’autres résultats aléatoires.|Expérimentez différentes compositions.
Disperser / reconstruire|Créez votre distribution.|Générez ou reconstruisez la dispersion avec les réglages actuels.|Visible / Points indique les points visibles et totaux.
Transformation et variation|Chaque instance est unique.|Variez la rotation, l’échelle et la hauteur au-dessus de la surface.|Combinez rotation et échelle aléatoires.
Caméra et performances|Grandes scènes. Moins de géométrie.|Face Camera oriente les plans texturés vers la caméra.|Utilisez des textures transparentes ; le résultat dépend de la scène et des matériaux.
Supprimer la dispersion|Un flux de travail propre.|Supprimez les distributions devenues inutiles.|Gérez les calques de dispersion créés.
Langue de l’interface|Créez dans votre langue.|Surface Pencil propose huit langues d’interface.|Choisissez votre langue dans l’extension. Défilez hors du panneau pour continuer.
`);
spTour('zh','Surface Pencil · 功能导览|在此面板内滚动|BLENDER · SURFACE PENCIL|← 上一步|下一步 →|重新开始 ↺|导览完成 — 在面板外继续滚动。|功能 {n} / {total} · 滚动探索|Surface Pencil 界面',`
源网格|您的资产，由您掌控。|选择一个或多个源网格，独立调整各源的散布量。|创建散布层、选择目标表面并添加其他源对象。
区域|绘制区域，自然填充。|在表面勾勒区域，并在边界内散布对象。|适用于花坛和指定范围。
路径|沿线布置。|在表面绘制路径，沿线散布对象。|适用于小径和边界。
画笔|自由绘制场景。|直接在表面涂绘散布覆盖范围。|调整画笔半径以控制笔触宽度。
整个网格|全面覆盖。|在整个选定网格上散布对象。|适合快速覆盖大型地形。
画笔半径|从细节到大面积。|调整涂绘区域的大小。|小半径适合细节，大半径适合大范围。
显示绘制和轮廓|查看绘制范围。|显示或隐藏涂绘区域及轮廓。|保留辅助线或使视图更加整洁。
线框盒预览|更轻负载，更自由。|用简化线框盒替代详细实例预览。|可减少绘制负担；实际性能取决于场景。
数量|控制散布数量。|增加或减少请求的散布点数量。|过滤器可能减少最终可见点数。
随机种子|新的随机排列。|更改种子，无需重新绘制即可生成不同分布。|尝试不同种子值。
最小间距|留出对象间距。|设置散布点之间的最小距离。|更大间距可能减少可容纳的点数。
最小 / 最大坡度|顺应地形。|将散布限制在指定坡度范围。|选择平坦或陡峭的区域。
最小 / 最大高度|在适当高度散布。|将放置限制在指定的高度百分比范围。|构建不同海拔的植被带。
中心 / 边缘|塑造分布。|调节对象向区域内部或边缘集中的程度。|适合强调中心或边界的构图。
边缘柔和度|柔化边界。|调整边缘附近分布的过渡。|形成更自然的过渡效果。
边缘缩减|细化边缘。|调整靠近边界的实例处理方式。|与其他边缘控制结合使用。
全部随机化|探索新可能。|快速生成其他随机排列结果。|尝试不同的构图变化。
散布 / 重建|生成您的分布。|根据当前设置生成或重建散布。|Visible / Points 显示可见点数和总点数。
变换与变化|让每个实例更独特。|调整旋转、缩放及表面偏移高度。|结合随机旋转和随机缩放，获得自然效果。
相机与性能|大型场景，更少几何体。|Face Camera 使带纹理的平面朝向相机。|使用透明树木纹理平面；效果取决于场景与材质。
移除散布|整洁的工作流程。|删除不再需要的散布结果。|管理您创建的散布层。
界面语言|用您的语言创作。|Surface Pencil 支持八种界面语言。|在插件内选择语言。在面板外滚动以继续浏览。
`);
spTour('ru','Surface Pencil · Обзор функций|Прокручивайте внутри панели|BLENDER · SURFACE PENCIL|← Назад|Далее →|Сначала ↺|Обзор завершён — прокручивайте вне панели.|Функция {n} из {total} · прокручивайте для просмотра|Интерфейс Surface Pencil',`
Исходные меши|Ваши объекты. Ваши правила.|Выберите один или несколько исходных мешей и настройте долю каждого отдельно.|Создайте слой, выберите поверхность и добавьте источники.
Область|Нарисуйте область.|Обведите участок и распределите объекты внутри его границ.|Подходит для клумб и заданных зон.
Путь|Следуйте линии.|Нарисуйте путь для распределения объектов вдоль линии.|Подходит для дорожек и границ.
Кисть|Рисуйте свободно.|Наносите распределение кистью прямо на поверхность.|Настраивайте радиус для узких или широких мазков.
Весь меш|Полное покрытие.|Распределяйте объекты по всему выбранному мешу.|Подходит для больших участков местности.
Радиус кисти|От деталей до широких мазков.|Настройте размер закрашиваемой области.|Малый радиус для деталей, большой для покрытия.
Отображение рисунка и контуров|Видите то, что рисуете.|Показывайте или скрывайте закрашенные области и контуры.|Оставляйте направляющие или очищайте вид.
Каркасные боксы|Меньше нагрузки. Больше свободы.|Показывайте простые каркасные боксы вместо детальных экземпляров.|Снижает нагрузку на отрисовку; скорость зависит от сцены.
Количество|Управляйте количеством.|Увеличивайте или уменьшайте запрошенное число точек.|Фильтры могут уменьшить число видимых точек.
Случайное зерно|Новая расстановка.|Измените Seed для другой случайной расстановки без повторного рисования.|Пробуйте разные значения.
Минимальный интервал|Оставьте место между объектами.|Установите минимальное расстояние между точками.|Больший интервал может уменьшить число точек.
Минимальный / максимальный уклон|Следуйте рельефу.|Ограничьте распределение заданным диапазоном уклонов.|Выбирайте плоские или крутые участки.
Минимальная / максимальная высота|На нужной высоте.|Ограничьте размещение процентным диапазоном высот.|Создавайте зоны растительности на разных высотах.
Центр / граница|Формируйте распределение.|Регулируйте концентрацию в центре или у границы области.|Для композиций с акцентом на центр или край.
Мягкость границы|Смягчайте переходы.|Настройте плавность распределения около границы.|Создавайте более естественные переходы.
Уменьшение по краям|Уточняйте края.|Настройте обработку экземпляров у границы.|Сочетайте с другими параметрами границ.
Рандомизировать всё|Исследуйте новые варианты.|Быстро генерируйте альтернативные случайные расстановки.|Экспериментируйте с композицией.
Распределить / перестроить|Создайте распределение.|Создайте или перестройте результат с текущими настройками.|Visible / Points показывает видимые и все точки.
Трансформация и вариации|Каждый экземпляр уникален.|Меняйте вращение, масштаб и высоту над поверхностью.|Сочетайте случайное вращение и масштаб для естественного результата.
Камера и производительность|Большие сцены. Меньше геометрии.|Face Camera ориентирует текстурированные плоскости к камере.|Используйте прозрачные текстуры деревьев; результат зависит от сцены и материалов.
Удаление распределения|Порядок в проекте.|Удаляйте ненужные результаты распределения.|Управляйте созданными слоями.
Язык интерфейса|Творите на своём языке.|Surface Pencil доступен на восьми языках интерфейса.|Выберите язык в дополнении. Прокручивайте вне панели, чтобы продолжить.
`);
function spLanguage(value){return SP_LANGS.some(([code])=>code===value)?value:'en';}
