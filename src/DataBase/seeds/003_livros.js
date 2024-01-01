
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('livro').del()
    .then(function () {
      // Inserts seed entries
      return knex('livro').insert([
        //categoria de programacao
        {
          titulo: 'Lógica de programação',
          subtitulo: 'A construção de algoritmos e estruturas de dados',
          imagens: 'images/books/programacao/1.jpg',
          sobre: 'A programação de computadores está diretamente relacionada com a utilização de lógica e com a construção de algoritmos e estruturas de dados. Claro, simples e objetivo, este livro introduz o leitor no universo da lógica aplicada à programação de computadores. Ao final do estudo, o aluno estará capacitado a construir algoritmos, assim como a assimilar mais facilmente qualquer linguagem de programação existente ou futura. O texto não requer nenhum conhecimento prévio de informática e é independente de características de máquina. Didático, utiliza com frequência exemplos e analogias provenientes do dia-a-dia para facilitar a compreensão dos assuntos abordados. Cada capítulo conta com exercícios de fixação, que visam sedimentar os assuntos de cada subitem, e com exercícios propostos, que cobrem todo o conteúdo do capítulo. No anexo encontram-se resoluções dos exercícios de fixação. A pseudolinguagem utilizada é intencionalmente próxima das linguagens de programação comumente adotadas como primeira linguagem, para facilitar a posterior tradução e implementação prática. Este livro foi pedagogicamente concebido para estudantes que estão iniciando seus estudos na área de construção de algoritmos e programação de computadores, servindo de base para disciplinas específicas ou como fonte de estudo independente.',
          ano_publicacao: 2005,
          editora: 'Prentice-hall',
          edicao: 3,
          paginas: 218,
          categoria_id: 1 
        },
        {
          titulo: 'Use a Cabeça! Java',
          imagens: 'images/books/programacao/2.jpg',
          sobre: 'Use a cabeça! - Java é uma experiência de aprendizado em programação orientada a objetos (OO) e Java. Projetado de acordo com princípios de aprendizado mentalmente amigáveis, este livro procura mostrar desde aspectos considerados básicos da linguagem a tópicos avançados que incluem segmentos, soquetes de rede e programação distribuída. Alguns conteúdos - A linguagem Java; Desenvolvimento orientado a objetos; Criação, teste e implantação de aplicativos; Uso da biblioteca do API Java; Manipulação de exceções; Uso de vários segmentos; Programação de GUI com o Swing; Rede com RMI e soquetes; Conjuntos e tipos genéricos',
          ano_publicacao: 2007,
          editora: 'Alta Books',
          edicao: 2,
          paginas: 284,
          categoria_id: 1 
        },
        {
          titulo: 'Entendendo e Dominando o Java',
          imagens: 'images/books/programacao/3.jpg',
          sobre: 'Neste livro, o leitor aprende a: - modelar uma aplicação usando a orientação a objetos ; - documentar um modelo usando à notação UML ; - entender a tecnologia Java e suas principais APIs ; - programar, compilar e executar as aplicações Java ; - trsbslhsr com coleções de objetos, usando a Java Collection API ; - construir interfaces gráficas usando a SWING API ; - Manipular eventos de usuários por meio de tratamento de eventos ; - integrar um banco de dados MySQL com o Java ; - fazer uso da ferramenta de desenvolvimento Eclipse.',
          ano_publicacao: 2007,
          editora: 'Digerati Books',
          edicao: 2,
          paginas: 414,
          categoria_id: 1 
        },
        {
          titulo: 'Java para a Web com Servlets, JSP e EJB',
          imagens: 'images/books/programacao/4.jpg',
          sobre: 'Java para a Web com Servlets, JSP e EJB é o livro que o leitor precisa para dominar a programação Java para Web. Abrange todas as tecnologias necessárias para programar aplicativos Web em Java usando Servlets 2.3, JSP 1.2, EJB 2.0 e programação do lado cliente com JavaScritp. Essas tecnologias são explicadas no contexto de projetos reais, tais como um aplicativo de e-commerce, um programa de gerenciamento de documento, upload e download programável de arquivos, além de um projeto de livro on-line baseado em XML. Além do excelente conteúdo, este livro inclui licença para dos componentes Web Java da BrainySoftware.com. O leitor recebe uma licença completa do componente Programmable File Download para distribuição comercial e não-comercial. Recebe também a concessão da licença para distribuir o popular bean File Upload do autor para uso não-comercial, licenciado pela empresa Fortune 500 Commerce One e adquirido por importantes companhias, tais como a Saudi Business Machine, Ltd. e a Healthcare Corporation. Acompanha CD-ROM contendo todas as listagens de código do livro, arquivos de projeto, bean file Upload, aplicativo servidor Jboss, driver mmmysql JDBC para MySql e ainda mais.',
          ano_publicacao: 2002,
          editora: 'Ciência Moderna Ltda',
          paginas: 807,
          categoria_id: 1 
        },
        {
          titulo: 'Use a Cabeça - Javascript',
          imagens: 'images/books/programacao/5.jpg',
          sobre: 'Você está pronto para dar um salto na arte de escrever páginas da web em HTML e CSS à criação de aplicações dinâmicas para web? Comece por aqui. Use a Cabeça! JavaScript é o seu passeio guiado para a emocionante e interativa criação de páginas da web. Criado para o seu cérebro, este livro abrange todos os fundamentos de JavaScript, das técnicas básicas de programação web, incluindo variáveis, funções e execução de loop, aos tópicos mais avançados como validação de formulário, manipulação de DOM, objetos personalizados, depuração ? e até Ajax! Então, prepare-se... Os responsivos sites da web estão há algumas páginas de distância.',
          ano_publicacao: 2008,
          editora: 'Alta books',
          paginas: 606,
          categoria_id: 1 
        },
        {
          titulo: 'Sistemas Operacionais com Java',
          imagens: 'images/books/programacao/6.jpg',
          sobre: 'Sistemas Operacionais com Java, Sétima Edição, foi atualizado para abranger os assuntos e aplicações mais atuais, e projetado para ajudá-lo a unir a lacuna entre conceitos e implementações. Integrando o modelo cliente-servidor, o texto inteiro o acompanha passo a passo por todos os principais aspectos da programação.',
          ano_publicacao: 2008,
          editora: 'Campus',
          edicao: 7,
          paginas: 674,
          categoria_id: 1 
        },
        {
          titulo: 'Use a Cabeça - Ajax Profissional',
          imagens: 'images/books/programacao/7.jpg',
          sobre: 'O Use a Cabeça! Ajax Profissional é uma experiência de aprendizagem completa para a programação de aplicativos Web dinâmicos e interativos. Construído para seu cérebro, este livro cobre o JavaScript, XHTML, solicitações assíncronas e síncronas, DOM e todo mais que você precisará para expandir e revolucionar as habilidades de seus aplicativos Web. Você fará mais do que simplesmente memorizar métodos a partir de uma estrutura escrita por outra pessoa ou arrastar e soltar coisas a partir de um kit de ferramentas. Quando você terminar, estará construindo aplicativos que conversam com um servidor sem o recarregamento de páginas, moverá itens na tela em resposta às ações dos usuários e até antecipará os erros de seus usuários... antes que eles sejam cometidos. Por que este livro parece tão diferente? Seu tempo é valioso demais para gastar lutando com novos conceitos. Usando a última pesquisa na ciência cognitiva e na teoria de aprendizagem para lidar com a experiência de aprendizagem multissensorial, o Use a Cabeça! Ajax Profissional utiliza um formato visualmente rico projetado para o modo como seu cérebro funciona, não uma abordagem com muito texto que o faz dormir.',
          ano_publicacao: 2009,
          editora: 'Alta books',
          paginas: 498,
          categoria_id: 1 
        },
        {
          titulo: 'Treinamento em Linguagem C++',
          subtitulo: 'Módulo 1',
          imagens: 'images/books/programacao/8.jpg',
          ano_publicacao: 1994,
          editora: 'Makron Books',
          paginas: 256,
          categoria_id: 1 
        },
        {
          titulo: 'Treinamento em Linguagem C++',
          subtitulo: 'Módulo 2',
          imagens: 'images/books/programacao/9.jpg',
          sobre: 'Com o objetivo principal de apresentar a linguagem C++ de maneira simples e clara e mostrar como ela pode ser usada para a criação de programas profissionais, este livro foi planejado para um curso completo de programação em linguagem C++. Os exemplos expostos podem ser facilmente adaptados para qualquer área de aplicação. O conteúdo reúne informações necessárias para o aprendizado de outras linguagens de programação orientada a objetos, como Visual C++, C#, Visual Basic, Builder C++, C++ em Linux e em Java, entre outras. Esta nova edição revisada e atualizada apresenta a evolução da linguagem C++, os avanços no campo da informática e a sofisticação dos computadores. Recomendado para qualquer profissional envolvido com programação em linguagem C e C++ e para o ensino de lógica de programação',
          ano_publicacao: 1994,
          editora: 'Makron Books',
          paginas: 318,
          categoria_id: 1 
        },
        //categoria administracao
        {
          titulo: 'Administração de informática',
          subtitulo: 'Funções e fatores críticos de sucesso',
          imagens: 'images/books/administracao/1.jpg',
          sobre: 'A Informática, bem como seu tratamento, tornou-se um valioso aspecto estratégico para as organizações de vários setores, operacionais ou de estratégias competitiva. Sua importância tem levado as organizações a considerarem a Informática um de seus fatores críticos de sucesso, pois sua administração não deve ter um enfoque essencialmente tecnológico e distante do restante da organização. Este livro tem dois objetivos principais: permitir o estudo e a analise da Administração de Informática, utilizando para isso uma estrutura que facilite seu entendimento e tratamento; e garantir a contribuição da Informática para o sucesso da organização a partir da identificação e estudo dos Fatores Críticos de Sucesso da Administração da Informática. O Autor apresenta, discute e propõe contribuições para a pratica da Administração de Informática, estudando suas funções e fatores críticos de sucesso. Além das recomendações praticas, são apresentados e analisados três casos dos setores bancários, industrial e de serviços',
          ano_publicacao: 2002,
          editora: 'Atlas',
          edicao: 4,
          paginas: 178,
          categoria_id: 2 
        },
        {
          titulo: 'Introdução à Teoria Geral da Administração',
          imagens: 'images/books/administracao/2.jpg',
          sobre: 'Este livro é destinado aos estudantes de Administração e a todos aqueles que necessitam de uma base conceitual e teórica indispensável à prática administrativa. Dizer que estamos em uma época de mudança e de instabilidade parece até redundância ou afirmação prosaica. Contudo, o que importa é que, à medida que o ambiente se torna mais instável e turbulento - como está acontecendo no mundo de hoje -, maior a necessidade de opções diferentes para a solução dos problemas e situações que se alteram e se diferenciam de maneira crescentemente diversa',
          ano_publicacao: 2003,
          editora: 'Campus',
          edicao: 7,
          paginas: 634,
          categoria_id: 2 
        },
        {
          titulo: 'Administração de recursos humanos',
          subtitulo: 'Fundamentos básicos',
          imagens: 'images/books/administracao/3.jpg',
          sobre: 'Esta obra incorpora os mais avançados conceitos da área de Recursos Humanos, bem como apresenta modelos decorrentes dos conceitos alinhados à realidade brasileira. Em substituição aos tradicionais enfoques funcionalistas, o livro foi estruturado com base na abordagem sistêmica - teoricamente mais atraente e, ao ser vivenciada, operacionalmente mais ajustada à complexa realidade do mundo empresarial contemporâneo. O autor retrata sua experiência pessoal adquirida ao longo dos anos na desafiante tarefa de administrar pessoas nas organizações, seja por meio do trabalho como dirigente e consultor, seja como professor e conferencista. O livro está estruturado com os seguintes capítulos: As organizações; As pessoas, As pessoas e as organizações; A administração de recursos humanos',
          ano_publicacao: 2007,
          editora: 'Atlas',
          edicao: 6,
          paginas: 253,
          categoria_id: 2 
        },
        {
          titulo: 'Teoria geral da Administração',
          subtitulo: 'Da revolução urbana à revolução digital',
          imagens: 'images/books/administracao/4.jpg',
          sobre: 'Este livro apresenta a evolução das idéias na história das organizações e da administração. O texto foi planejado para fornecer a visão dos conceitos e facilitar a aquisição das técnicas que se desenvolveram a cada estágio evolutivo. Os casos, no final de cada capítulo, possibilitam trazer os conceitos e as técnicas para a esfera da aplicação prática, ajudando o estudante a desenvolver suas competências de análise e julgamento. Abrangente e atualizado, o livro dá tratamento cuidadoso a temas clássicos e contemporâneos, como: Administração científica; Escola do processo administrativo; Sistema Toyota de Produção; Modelo japonês de administração; Pensamento sistêmico; Ética e responsabilidade social; Administração participativa. A redação concisa e organizada em itens numerados facilita a leitura. A bibliografia faz uso dos recursos da Internet, que o estudante é incentivado a utilizar intensamente',
          ano_publicacao: 2011,
          editora: 'Atlas',
          edicao: 6,
          paginas: 491,
          categoria_id: 2 
        },
        {
          titulo: 'Introdução à Administração',
          imagens: 'images/books/administracao/5.jpg',
          sobre: 'Este livro oferece a professores e estudantes uma visão abrangente do processo de administrar sistemas de recursos. A análise das funções (planejamento, organização, execução, liderança e controle) enfatiza a aplicação prática, apoiando-se em uma base conceitual enxuta. O texto, auxiliado por ilustrações de alto desempenho, foi planejado para facilitar a leitura e a aquisição rápida de idéias e técnicas. Esta nova edição incorpora muitas inovações, ditadas pela evolução da prática administrativa e pelas sugestões dos professores que adotam este livro em inúmeras instituições de ensino superior. Algumas das novas idéias exploradas neste livro são as seguintes: Comunicação gerencial, dinâmica de grupo, somos todos administradores, grupos autogeridos, competitividade, intuição e processo decisório, contexto da liderança, balanced scorecard e Prêmio Europeu da Qualidade. Totalmente reformulado, o texto está dividido em 18 capítulos, agrupados em cinco partes: Conceitos básicos, Planejamento, Organização, Comportamento Humano e Desempenho, e Conceitos Integrativos. Cada capítulo apresenta um estudo de caso e questões para estudo. Os casos retratam situações reais, enfrentadas por organizações e administradores no Brasil e em outros países. O livro procura atender especificamente aos cursos que focalizam o estudo do processo administrativo e o desenvolvimento de competências gerenciais nos estudantes',
          ano_publicacao: 2009,
          editora: 'Atlas',
          edicao: 7,
          paginas: 403,
          categoria_id: 2 
        },
        {
          titulo: 'Administração da produção e operações',
          imagens: 'images/books/administracao/6.jpg',
          sobre: 'Esta nova edição ressalta os aspectos mais essenciais da administração da produção e operações e contempla temas hoje indispensáveis, apresentados em três novos capítulos: Gestão da Cadeia de Suprimentos (Capítulo 15), Filosofia de Controle Just in Time (Capítulo 18) e Gerência da Qualidade Total (Capítulo 20). A obra atende cursos de administração da produção e operações e aborda grande número de temáticas do assunto com conceitos e aplicações fundamentais, além de apresentar exercícios resolvidos, questões para discussão e problemas propostos',
          ano_publicacao: 2011,
          editora: 'Cengage Learning',
          edicao: 2,
          paginas: 624,
          categoria_id: 2 
        },
        {
          titulo: 'Administração de Sistemas de Informação',
          imagens: 'images/books/administracao/7.jpg',
          sobre: 'Nos últimos anos a competição entre as empresas tem crescido, impulsionada principalmente pelo surgimento de novas tecnologias. Proporcional ao aumento da competitividade, cresce também a necessidade das empresas serem mais e cientes. A exigência por excelência colocou os investimentos em tecnologia em patamar prioritário, uma vez que, quanto mais preparada para atender e responder rapidamente as demandas do mercado, maiores suas vantagens competitivas no mercado. Administração de sistemas de informação analisa o papel dos sistemas de informação neste novo cenário mundial. A troca de informação e da presença de bancos de dados nunca foram tão importantes, assim como agura do administrador desses sistemas. Dividido em dez capítulos, o livro traça um abrangente histórico do tema, desde a evolução dos computadores aos melhores métodos para manter as corporações organizadas e modernas nesse quesito, destacando as discussões mais recentes e as tecnologias mais adequadas. Nesta obra, alunos de Administração de Empresas, Sistemas de Informação, Computação e Ciências Contábeis, além de interessados em entender melhor esses procedimentos encontram um grande aliado',
          ano_publicacao: 2008,
          editora: 'Saraiva',
          paginas: 503,
          categoria_id: 2 
        },
        {
          titulo: 'Administração da Produção e de Operações',
          imagens: 'images/books/administracao/8.jpg',
          ano_publicacao: 2009,
          editora: 'Bookman',
          paginas: 424,
          categoria_id: 2 
        },
        {
          titulo: 'Administração de Marketing no Brasil',
          imagens: 'images/books/administracao/9.jpg',
          sobre: 'Fazer Marketing no Brasil não é fácil. É preciso muito conhecimento sociológico, antropológico e, sobretudo, mercadológico para entender as idiossincrasias de um país com uma das maiores dimensões territoriais do mundo e por outro lado, com costumes e hábitos bastante diferenciados. No Rio Grande do Sul, por exemplo, o gosto pelo chimarrão, tem mais a ver com nossos vizinhos argentinos, uruguaios e paraguaios do que com os vizinhos paranaenses ou catarinenses',
          ano_publicacao: 2009,
          editora: 'Elsevier',
          edicao: 3,
          paginas: 428,
          categoria_id: 2 
        },
        {
          titulo: 'Administração de Processos',
          subtitulo: 'Conceitos, Metodologia, Práticas',
          imagens: 'images/books/administracao/10.jpg',
          sobre: 'Evolução da administração e das empresas e as consequencias na administração do processo; 2. Abordagens e amplitudes da administração de processos; 3. Como desenvolver e implementar os processos administrativo nas empresas; 4. Como interligar os processos com outros instrumentos administrativos das empresas; 5. Perfil básico do profissional administrador de processos',
          ano_publicacao: 2007,
          editora: 'Atlas',
          edicao: 2,
          paginas: 314,
          categoria_id: 2 
        },
        //categoria matematica
        {
          titulo: 'Matemática discreta para computação e informática',
          imagens: 'images/books/programacao/1.jpg',
          sobre: 'Este livro apresenta conceitos da matemática discreta, explicados e exemplificados por meio de exercícios. É o complemento do livro Matemática discreta para computação e informática',
          ano_publicacao: 2013,
          editora: 'Bookman',
          edicao: 4,
          paginas: 348,
          categoria_id: 3 
        },
        {
          titulo: 'Fundamentos de Matemática Elementar',
          subtitulo: 'Geometria Espacial, Posição e Metrica',
          imagens: 'images/books/matematica/2.jpg',
          sobre: 'Esta obra aborda a Geometria Espacial, usualmente trabalhada nas últimas séries do ensino médio. Os capítulos I à VI apresentam um estudo posicional de pontos, retas e planos. Os capítulos VII à XVI tratam da métrica dos poliedros e corpos redondos com destaque para os cálculos de áreas e volumes. No capítulo XIV, mostramos o estudo métrico de sólidos incritos ou circunscritos a outros',
          ano_publicacao: 2005,
          editora: 'Atual',
          edicao: 6,
          paginas: 440,
          categoria_id: 3 
        },
        {
          titulo: 'Matemática Aplicada à Gestão de Negócios',
          imagens: 'images/books/matematica/3.jpg',
          sobre: 'Esta obra transcende a análise matemática, concentrando-se mais na aplicação dos conceitos à gestão dos negócios, com base na interpretação jurídica. É uma valiosa ferramenta para administradores de empresas, empresários, advogados, economistas, contabilistas e demais profissionais da área. O livro traz os seguintes assuntos - custo de oportunidade; regime de caixa e regime de competência; juros; valor do dinheiro no tempo; desconto; sistemas de amortização; inflação e correção monetária (indexação); aplicação dos sistemas Price e SAC; cobrança; imposto sobre operações de crédito, câmbio e seguro, ou relativas a títulos ou valores mobiliários (IOF); mercado de câmbio',
          ano_publicacao: 2005,
          editora: 'Fgv',
          paginas: 272,
          categoria_id: 3 
        },
        {
          titulo: 'Matemática com aplicações tecnológicas',
          subtitulo: 'Matemática básica',
          imagens: 'images/books/matematica/4.jpg',
          sobre: 'Este livro, volume número 1 da coleção "Matemática com Aplicações Tecnológicas", apresenta a matemática básica, de forma clara e objetiva, por meio de textos, ilustrações, exemplos, exercícios resolvidos e propostos com seus resultados. Tem por finalidade conduzir o aprendizado no sentido de clarear conceitos e de firmar raciocínios, geralmente pouco absorvidos nos cursos normais de matemática',
          ano_publicacao: 2014,
          editora: 'Blucher',
          edicao: 1,
          paginas: 384,
          categoria_id: 3 
        },
        {
          titulo: 'Matemática', 
          subtitulo: 'Ciência e Aplicações',
          imagens: 'images/books/matematica/5.jpg',
          sobre: 'Nesta obra - Exemplos, exercícios e testes de vestibulares; Contextualização do conteúdo matemático, aplicado em situações do cotidiano; Uso de textos, tabelas e gráficos retirados de revistas e jornais, sobretudo nos capítulos de Matemática Financeira e Estatística; Manual completo com comentários sobre tópicos abordados em sala, sugestões de abordagem, de avaliação e de atividades em grupo; Lista de exercícios complementares e a resolução de questões apresentadas no livro do aluno; Um pouco de história - breve narrativa sobre o desenvolvimento do pensamento matemático; Aplicações - textos complementares que visam permitir aplicar os conhecimentos matemáticos a outros campos, como Física, Economia ou Artes',
          ano_publicacao: 2014,
          editora: 'Atual',
          edicao: 8,
          paginas: 448,
          categoria_id: 3 
        },
        {
          titulo: 'Matemática Básica Para Decisões Administrativas',
          imagens: 'images/books/matematica/6.jpg',
          sobre: 'O cenário cada vez mais competitivo que permeia o ambiente onde se inserem as organizações acaba por exigir pessoas mais flexíveis, com visão multidisciplinar e atentas para estar no comando. Não raro, o desafio que se coloca é: como desenvolver competências e habilidades para um \"pensar\" matematicamente para a tomada de decisões em tempos de mudanças? Visando solucionar este problema, nasce esta obra a partir da necessidade verificada em sala de aula e em conversa com alunos, professores e dirigentes de escolas voltadas para a gestão, da criação de vínculo entre a matemática e os diferentes componentes da organização curricular. Os referenciais teóricos que fundamentaram a estrutura do livro são variados e as repercussões na utilização da abordagem proposta objetivam superar a visão mecanicista e fragmentada da realidade do ensino em várias áreas do saber. O pensamento analítico, linear e racional enfatiza as partes e não a relação entre elas, valorizando a memorização. A educação do futuro é aquela que permite um conjuntos de ações estruturalmente integradas, buscando a textualização, valorizando a criatividade, estimulando os desafios e contribuindo para a formação do pensamento sistêmico dos futuros gestores',
          ano_publicacao: 2008,
          editora: 'Atlas',
          edicao: 2,
          paginas: 192,
          categoria_id: 3 
        },
        {
          titulo: 'Fundamentos de Matemática Elementar 5',
          subtitulo: 'Combinatória, Probabilidade',
          imagens: 'images/books/matematica/7.jpg',
          sobre: 'Esta obra se propõe a abordar o estudo da análise combinatória e do calculo de probabilidades. Em análise combinatória, a ênfase maior é dada ao princípio fundamental da contagem',
          ano_publicacao: 2006,
          editora: 'Atual',
          edicao: 7,
          paginas: 184,
          categoria_id: 3 
        },
        {
          titulo: 'Fundamentos de Matemática Elementar 4',
          subtitulo: 'Sequências, Matrizes, Determinantes e Sistemas',
          imagens: 'images/books/matematica/8.jpg',
          sobre: 'Esta obra se propõe a abordar o estudo de matrizes e sistemas lineares',
          ano_publicacao: 2006,
          editora: 'Atual',
          edicao: 7,
          paginas: 232,
          categoria_id: 3 
        },
        {
          titulo: 'Fundamentos de Matemática Elementar 3',
          subtitulo: 'Trigonometria',
          imagens: 'images/books/matematica/9.jpg',
          sobre: 'Esta obra estuda a Trigonometria em três níveis de profundidade- a Trigonometria no triângulo retângulo, a Trigonometria na circunferência e a Trigonometria no cliclo',
          ano_publicacao: 2004,
          editora: 'Atual',
          edicao: 8,
          paginas: 320,
          categoria_id: 3 
        },
        {
          titulo: 'Fundamentos de Matemática Elementar 11',
          subtitulo: 'Matemática Comercial e Matemática Financeira',
          imagens: 'images/books/matematica/10.jpg',
          sobre: 'Esta obra aborda conceitos introdutórios de Matemática Comercial, Matemática Financeira e Estatítica Descritiva',
          ano_publicacao: 2004,
          editora: 'Atual',
          paginas: 232,
          categoria_id: 3 
        },
        //categoria financas
        {
          titulo: 'Introdução ao cálculo para administração, economia e contabilidade',
          imagens: 'images/books/financas/7.jpg',
          sobre: 'Há pouquíssimos livros de introdução ao cálculo no mercado, e se delimitarmos aos mais recentes esse número fica ainda menor. É uma disciplina carente de livros introdutórios, livros que possam ser usados nos cursos de Administração, Contabilidade e Economia, como se propõe esta obra. Pela importância do assunto e pela necessidade de bons livros, a Editora Saraiva reuniu novamente os autores do já consagrado livro Cálculo Função de uma e várias variáveis, para lançar este introdutório. A obra apresenta o cálculo de forma didática, trazendo aspectos conceituais e suas aplicações. Os capítulos trazem os principais temas abordados nos programas da disciplina de cálculo nos cursos de graduação de Administração, Economia e Contabilidade, como conjuntos numéricos, funções, limites, derivadas e suas aplicações, integrais, espaço n-dimensional e funções de duas e de três variáveis. O livro possui, ainda, um grande conjunto de exercícios resolvidos para fixação de conteúdo uma ferramenta importante para alunos e professores',
          ano_publicacao: 2009,
          editora: 'Saraiva',
          paginas: 342,
          categoria_id: 4 
        },
        {
          titulo: 'Contabilidade para Executivos',
          imagens: 'images/books/financas/2.jpg',
          sobre: 'Este livro apresenta os mecanismos desenvolvidos pela ciência contábil e as formas adotadas pelas empresas para demonstrar sua situação no mercado. Mostra, também, como desenvolver uma análise econômico-financeira tomando por base as informações contidas nas demonstrações contábeis. Os autores ressaltam a riqueza da informação contábil e sua grande utilidade no processo de gestão de uma organização',
          ano_publicacao: 2010,
          editora: 'Fgv',
          edicao: 9,
          paginas: 124,
          categoria_id: 4 
        },
        {
          titulo: 'Excel para Profissionais de Finanças',
          imagens: 'images/books/financas/5.jpg',
          sobre: 'Mantendo a característica principal que o trouxe a esta segunda edição, Excel para Profissionais de Finanças é extremamente prático. Os capítulos partem de uma revisão conceitual, exploram as funções e recursos necessários para a solução de problemas seguindo para a modelagem em planilhas e finalizando com exercícios propostos. As planilhas utilizadas ao longo do livro estão disponíveis para download no site da editora através do uso do PIN fornecido em cada exemplar. Ganchos: - Completamente atualizado com as funcionalidades do Excel 2010; - Caráter eminentemente prático; - Recursos são usados aplicando-se os conceitos fundamentais; - Mostra como modelar os problemas do dia a dia em planilhas de cálculo',
          ano_publicacao: 2011,
          editora: 'Campus',
          edicao: 2,
          paginas: 375,
          categoria_id: 4 
        },
        {
          titulo: 'Princípios de Finanças Corporativas',
          imagens: 'images/books/financas/10.jpg',
          sobre: 'Best-seller mundial, "Princípios de Finanças Corporativas" enfatiza os diferentes aspectos das decisões de investimento e de financiamento, a gestão dos riscos do mercado e muitos outros assuntos que fazem parte das preocupações financeiras diárias dos administradores. Elaborado com o intuito de desmitificar o mundo das finanças para os estudantes, este livro tornou-se referência em centenas de cursos de graduação e pós-graduação, utilizando os seguintes recursos pedagógicos: dados financeiros de empresas do mundo real, questões para a revisão de conceitos, questões práticas, questões desafiantes, minicasos, uso do Excel para compreensão e resolução de problemas',
          ano_publicacao: 2013,
          editora: 'AMGH',
          edicao: 10,
          paginas: 876,
          categoria_id: 4 
        },
        {
          titulo: 'Princípios de Administração Financeira',
          imagens: 'images/books/financas/11.jpg',
          sobre: 'Em sintonia com as tendências no ramo da educação, esta edição traz as seções "Em sua vida pessoal", que mostra como os estudantes podem utilizar os tópicos apresentados nos capítulos em seu dia a dia, e "Exemplo de finanças pessoais", que demonstra como aplicar os conceitos, as ferramentas e as técnicas da administração financeira nas decisões financeiras pessoais. Outra novidade desta edição são os apêndices brasileiros, que complementam os principais tópicos tratados no livro, conferindo-lhes um caráter nacional. Entre outros assuntos, esses apêndices abordam o impacto da Lei Sarbanes-Oxley para as empresas brasileiras, os impactos da transição da contabilidade brasileira para o padrão IFRS e os aspectos de tributação das pessoas jurídicas no Brasil',
          ano_publicacao: 2010,
          editora: 'Pearson Prentice Hall',
          edicao: 12,
          paginas: 775,
          categoria_id: 4 
        },
        {
          titulo: 'Curso de Administração Financeira',
          imagens: 'images/books/financas/3.jpg',
          sobre: 'Apresenta conteúdo que permite fundamentar uma tomada de decisão financeira. Explica os fundamentos de Finanças Corporativas inseridas no ambiente sócio-econômico atual. Aborda as decisões financeiras, sustentabilidade e responsabilidade social, objetivos da empresa, mercados financeiros, formação de juros, avaliação de ações e títulos de renda fixa, como as empresas decidem seus investimentos, estratégias e direcionadores de valor. Contém exercícios e casos práticos',
          ano_publicacao: 2014,
          editora: 'Atlas',
          edicao: 3,
          paginas: 857,
          categoria_id: 4 
        },
        {
          titulo: 'Fundamentos de contabilidade',
          subtitulo: 'Utilizando o excel',
          imagens: 'images/books/financas/6.jpg',
          sobre: 'Escrito em linguajar coloquial, este livro tem por objetivo explicar a Contabilidade, em vez de torná-la uma decoreba enfadonha. O recurso da informática permitirá que o aluno poupe o tempo de localizar erros, podendo se dedicar mais ao estudo da Contabilidade',
          ano_publicacao: 2006,
          editora: 'Saraiva',
          paginas: 261,
          categoria_id: 4 
        },
        {
          titulo: 'Matemática Financeira',
          subtitulo: 'Objetiva e Aplicada',
          imagens: 'images/books/financas/9.jpg',
          sobre: 'A principal característica do autor tem sido a de apresentar a Matemática Financeira de forma clara, objetiva e pragmática, e de incorporar as inovações tecnológicas, facilitando o aprendizado da matéria',
          ano_publicacao: 2011,
          editora: 'Elsevier',
          edicao: 9,
          paginas: 353,
          categoria_id: 4 
        },
        {
          titulo: 'Matemática financeira e engenharia econômica',
          subtitulo: 'Princípios e aplicações',
          imagens: 'images/books/financas/8.jpg',
          sobre: 'Este livro enfatiza a aplicação da Matemática Financeira, especialmente voltada ao sistema de capitalização composto e à análise de viabilidade econômica de investimentos, com base nos princípios da Engenharia Econômica. Além do desenvolvimento conceitual e matemático, são apresentados em todos os assuntos cálculos pela HP 12C, pelo Excel (planilha personalizada) e por tabelas financeiras',
          ano_publicacao: 2017,
          editora: 'Blucher',
          edicao: 2,
          paginas: 320,
          categoria_id: 4 
        },
        {
          titulo: 'Administração Financeira',
          subtitulo: 'Uma Abordagem Introdutória',
          imagens: 'images/books/financas/1.jpg',
          sobre: 'A Administração Financeira desponta na atualidade como uma das áreas empresariais mais importantes na condução das empresas rumo à excelência e ao sucesso. A rentabilidade das empresas significa simplesmente o sinônimo da excelência e do sucesso empresarial para muitos executivos. O mercado avalia o sucesso empresarial e oportunidades de aplicação financeira através do balanço contábil e dos demonstrativos financeiros do negócio. Por todas essas razões, o executivo de negócios, o investidor - seja o proprietário do negócio ou acionista - como também todo aquele que lida com números precisa conhecer as bases da Administração Financeira para ter uma idéia segura a respeito de seus indicadores',
          ano_publicacao: 2005,
          editora: 'Elsevier',
          paginas: 116,
          categoria_id: 4 
        },
        {
          titulo: 'Estrutura e Analise de Balanços',
          subtitulo: 'Um Enfoque Econômico Financeiro',
          imagens: 'images/books/financas/4.jpg',
          ano_publicacao: 2015,
          editora: 'Atlas',
          edicao: 11,
          paginas: 392,
          categoria_id: 4 
        },
        // categoria ingles
        {
          titulo: 'inglês.com.textos para informática',
          imagens: 'images/books/ingles/4.jpg',
          sobre: 'Este livro contém texto e atividades voltados para o ensino de inglês na área de informática em qualquer de suas modalidades: processamento de dados, ciência da computação ou análise de sistemas. Os textos escolhidos envolvem desde a história das máquinas até questões mais recentes, como a inteligência artificial',
          ano_publicacao: 2003,
          editora: 'Disal',
          paginas: 148,
          categoria_id: 5 
        },
        {
          titulo: 'Dicionário Oxford Escolar',
          subtitulo: 'Para Estudantes Brasileiros de Inglês',
          imagens: 'images/books/ingles/2.jpg',
          sobre: 'Este dicionário foi feito para estudantes brasileiros que estão aprendendo Inglês e inclui as mudanças feitas pela Nova Ortografia. O dicionário apresenta mais de 68.000 palavras, frases e exemplos; 78.000 traduções; Páginas coloridas para desenvolvimento de vocabulário; Notas para ajudar o usuário',
          ano_publicacao: 2007,
          editora: 'Oxford University Press',
          edicao: 2,
          paginas: 757,
          categoria_id: 5 
        },
        {
          titulo: 'Business Grammar & Practice',
          subtitulo: 'New Edition',
          imagens: 'images/books/ingles/1.jpg',
          sobre: 'Business Grammar & Practice contains forty five short units covering the grammar professionals need to communicate successfully. Authentic materials such as news articles, documents, graphs and diagrams help students to the right grammar for their needs. The book is suitable for general reference ,self study and classroom use',
          ano_publicacao: 2003,
          editora: 'Oxford University Press',
          edicao: 2,
          paginas: 232,
          categoria_id: 5 
        },
        {
          titulo: 'Leitura em Lingua Inglesa',
          subtitulo: 'Uma Abordagem Instrumental',
          imagens: 'images/books/ingles/5.jpg',
          ano_publicacao: 2003,
          editora: 'Disal',
          edicao: 2,
          paginas: 203,
          categoria_id: 5
        },
        {
          titulo: 'Inglês para Concursos',
          imagens: 'images/books/ingles/3.jpg',
          sobre: 'Este livro visa desenvolver o estudo da língua inglesa por meio de temas como saúde, transportes, turismo, crimes, direitos humanos, ciência, cultura, literatura, meio ambiente, finanças, negócios, etc. Em cada unidade são apresentados os tópicos gramaticais, exercícios de vocabulário e estratégias de leitura com o objetivo de facilitar a tarefa do leitor de interpretar textos em inglês. Há também um estudo de assuntos como discourse markers, phrasal verbs, slang, collocations, idiomatic expressions, entre outros',
          ano_publicacao: 2010,
          editora: 'Elsevier',
          edicao: 2,
          paginas: 298,
          categoria_id: 5 
        },
        // categoria tecnologia da informação
        {
          titulo: 'Tecnologia da informação para gestão',
          subtitulo: 'Em busca do melhor desempenho estratégico e operacional',
          imagens: 'images/books/ti/8.jpg',
          sobre: 'Nesta nova edição de Tecnologia da Informação para Gestão, Turbam e Volonino trazem Fundamentos e tendências significativos para os sistemas de informação e a tecnologia, fornecendo ao leitor um portfólio de habilidades que lhe proporcionará vantagem competitiva em empregos e promoções.',
          ano_publicacao: 2013,
          editora: 'Bookman',
          edicao: 8,
          paginas: 468,
          categoria_id: 6 
        },
        {
          titulo: 'Fundamento da Programação de Computadores',
          subtitulo: 'Algoritmos, Pascal, C/c++ (Padrão Ansi) e Java',
          imagens: 'images/books/ti/3.jpg',
          sobre: 'Fundamentos da programação de computadores - algoritmos, PASCAL, C/C++ (padrão ANSI) e JAVA revisa as classes JAVA e trata de vetores e matrizes dinâmicas, bem como aborda o padrão ANSI para as resoluções em C/C++. Além disso, apresenta dois capítulos - Introdução à programação orientada a objetos e Desafios. Apresenta ainda exemplos, problemas e analogias para alunos de ciência da computação, engenharia da computação, sistemas de informação, análise de sistemas e desenvolvimento de sistemas',
          ano_publicacao: 2012,
          editora: 'Pearson',
          edicao: 3,
          paginas: 680,
          categoria_id: 6 
        },
        {
          titulo: 'Tecnologia de Informação e Desempenho Empresarial',
          subtitulo: 'As Dimensões de Seu Uso e Sua Relação com Os Benefícios do Negócio',
          imagens: 'images/books/ti/9.jpg',
          sobre: 'Este livro tem como objetivo principal identificar os direcionadores e os benefícios efetivos da utilização de Tecnologia de Informação, os desafios e sua administração, os indicadores de desempenho das empresas que utilizam intensamente esta tecnologia e as atitudes dos principais executivos neste ambiente, bem como a relação que existe entre essas dimensões. A partir desta identificação, são também identificados os benefícios oferecidos da utilização de Tecnologia de Informação, por meio da identificação dos vínculos dos benefícios oferecidos pelos projetos e infra-estrutura desta tecnologia com o desempenho empresarial, expressados em indicadores e métricas, mesmo que intangíveis e indiretos. O livro apresenta as estruturas de análise da situação, da utilização e de análise dos gastos e investimentos desta tecnologia nas empresas, oferecendo subsídios para a sua administração bem-sucedida. O livro apresenta os resultados de pesquisas feitas com os principais executivos de negócio e de tecnologia das empresas com investimentos significativos nesta tecnologia, e do estudo de caso realizado sobre o uso de Tecnologia de Informação e desempenho empresarial numa empresa com gastos e investimentos significativos em Tecnologia da Informação',
          ano_publicacao: 2016,
          editora: 'Atlas',
          edicao: 3,
          paginas: 193,
          categoria_id: 6 
        },
        {
          titulo: 'TI Update',
          subtitulo: 'A tecnologia da informação nas grandes empresas',
          imagens: 'images/books/ti/10.jpg',
          sobre: 'Grandes empresas precisam de grandes soluções. Estas não mais se resumem ao âmbito limitado do processamento de dados aplicado à automação de escritórios. Ao deparar-se com o desafio e a velha Informática transmutou-se em algo bem mais sofisticado: a Tecnologia da Informação, ou TI para os íntimos. Plataformas, programas e custos milionários são atualmente a regra nas corporações e grandes organizações que deles não podem abrir mão, sob pena de serem esmagadas pela concorrência ou pelo peso de suas atividades-meio e crescentes atribuições. A TI evolui em velocidade estonteante. Novas aplicações surgem a cada momento, fusões, aquisições e incorporações entre as empresas, ao contrário do que ocorria no passado, tornaram-se a regra, não mais a exceção. Estar atualizado sobre as necessidades das grandes organizações na área de TI é hoje uma necessidade vital para quem deseja trabalhar em uma delas, quer como técnico quer como gerente ou executivo. Daí a importância deste livro, que também é de um auxílio inestimável a quem precise causar boa impressão em uma entrevista de admissão em uma grande empresa, pois o conhecimento das necessidades e tendências da TI nas corporações é um diferencial valioso, que com certeza irá contar muitos pontos e causar uma impressão favorável ao entrevistador ou entrevistadora',
          ano_publicacao: 2008,
          editora: 'Brasport',
          paginas: 242,
          categoria_id: 6 
        },
        {
          titulo: 'Tecnologia da Informação',
          subtitulo: 'Aplicada a Sistemas de Informação Empresariais',
          imagens: 'images/books/ti/7.jpg',
          sobre: 'Relata sobre conceitos, metodologias e modelos aplicados a sistemas de informação (nos níveis operacional, gerencial e estratégico) que contribuem com as organizações (privadas e públicas) nas atividades de concepção, desenvolvimento e implantação de projetos de sistemas, gestão de informações e gestão de informática. O objetivo principal do livro é descrever como as informações e os conhecimentos podem contribuir nos processos decisórios dos gestores e clientes (usuários de informática), que, para realizar suas atividades, utilizam as emergentes tecnologias disponíveis no mercado, tais como, softwares ERP, SAD e EIS, Banco de Dados, Data Warehouse, Inteligência Artificial, Data Mining, Sistemas de Telecomunicação, Internet e outras. Está transcrita nesta obra grande parte da experiência em informática e em gestão da tecnologia da informação dos autores, adquirida desde 1980 nas pesquisas acadêmicas, em sala de aula e nos trabalhos de consultoria em diferentes empresas. O livro está dividido em seis partes: Empresa e sistemas; Tecnologia da informação; Papel estratégico da informação e dos sistemas de informação nas empresas; Processo de desenvolvimento e de implantação de sistemas de informação empresariais; Integração, alinhamento, qualidade e divulgação da informação, do conhecimento e da inteligência nas organizações; Tecnologia da informação aplicada no governo e nas organizações públicas',
          ano_publicacao: 2013,
          editora: 'Atlas',
          edicao: 9,
          paginas: 345,
          categoria_id: 6 
        },
        {
          titulo: 'Redes de Computadores',
          imagens: 'images/books/ti/6.jpg',
          sobre: 'Poucas outras áreas, em um período tão curto, apresentaram tantas revoluções tecnológicas quanto a de Redes de Computadores. Em alguns poucos anos, vimos a popularização da internet, a predominância do protocolo IP sobre outros protocolos, o crescimento da preocupação com temas como \"segurança\" e \"qualidade de serviço\" e, mais recentemente, a expansão das redes sem fio. Observamos também a convergência das tecnologias utilizadas em redes de telecomunicações e redes de computadores, nas quais, até mesmo os telefones celulares, podem ser identificados por endereços IP. Nesse novo cenário, a quarta edição do livro Redes de Computadores, do renomado autor Andrews S. Tananbaum, apresenta o que há de mais atual na área. Com um estilo próprio e inconfudível, Tenanbaum é capaz de abordar temas complexos através de exemplos que introduzem conceitos importantes, de forma gradativa e com linguagem simplis. Através da análise desses exemplos, o autor desenvolve o senso crítico o leitor, levando-o a refletir sobre as tecnologias estudadas, ao invés de simplesmentente descrevê-las. Tananbaum também apresenta um estilo único, ao equilibrar com coerência temas que se adequam tanto às Telecomunicações quanto à informática. Por todos essas características, essa obra torna-se indispensável para estudantes e profissionais que desejam, não apenas acompanhar os avanços mais importantes, mas também adquirir uma formação sólida em uma área tão dinâmica quanto a de Redes de computadores',
          ano_publicacao: 2003,
          editora: 'Elsevier',
          edicao: 4,
          paginas: 946,
          categoria_id: 6 
        },
        {
          titulo: 'Infra-estrutura, Protocolos e Sistemas Operacionais de Lans',
          subtitulo: 'Redes Locais',
          imagens: 'images/books/ti/4.jpg',
          sobre: 'O objetivo desta obra é explicar o funcionamento das Redes Locais quanto à infra-estrutura (cabeamento, conectores, etc.), comunicação (protocolos de LAN), projeto, gestão e segurança para atender a uma grande demanda de mercado. Apresenta, o conhecimento tecnológico sobre os principais protocolos utilizados em Redes Locais (LANs: Ethernet, Fast Ethernet, etc.), uma arquitetura para redes múltiplas (TCP/IP), protocolos como Novell SPX/IPX, metodologia de detecção e resolução de problemas, aspectos de planejamento, além de inserir exemplos de problemas e soluções. São abordados também os aspectos de otimização, projeto e consultoria.',
          ano_publicacao: 2007,
          editora: 'Érica',
          edicao: 2,
          paginas: 334,
          categoria_id: 6 
        },
        {
          titulo: 'Arquitetura de Redes de Computadores',
          imagens: 'images/books/ti/1.jpg',
          sobre: 'O livro Arquitetura de Redes de Computadores tem o objetivo de apresentar a estrutura e o funcionamento das redes de computadores de forma atual, abrangente e, principalmente, didática. O livro aborda as principais tecnologias relacionadas às redes de computadores, apresentando padrões de mercado consagrados como, por exemplo, os utilizados na Internet e redes locais Ethernet. Uma das maiores dificuldades para aqueles que querem estudar redes de computadores é a dificuldade em visualizar o funcionamento dos protocolos existentes e ter a compreensão do relacionamento entre eles. Para tentar minimizar esse problema, o texto utiliza mais de 250 figuras e apresenta exemplos de protocolos atuais, tornando a compreensão dos conceitos e mecanismos mais simples. A sequência dos assuntos tem a preocupação de garantir a evolução de complexidade do conteúdo, e ao final de cada capítulo são propostos exercícios para fixar os conceitos apresentados, totalizando quase 400 exercícios',
          ano_publicacao: 2013,
          editora: 'Ltc',
          edicao: 2,
          paginas: 272,
          categoria_id: 6 
        },
        {
          titulo: 'Redes de Computadores e a Internet',
          imagens: 'images/books/ti/5.jpg',
          sobre: 'Seguindo o sucesso da abordagem top-down de suas edições anteriores, Redes de computadores e a Internet continua focando em camadas de aplicação e interfaces de programação, propondo ao leitor uma experiência prática com os conceitos de protocolo e redes de computadores antes de trabalhar com mecanismos de transmissão de informação das camadas inferiores das pilhas de protocolos. Em sua sexta edição, além de manter essa característica inovadora, a obra adota o Python em suas aplicações e explora temas recentes e importantes, como as redes 4G e os serviços em nuvem. É indicada para alunos de graduação em ciências da computação, engenharia da computação, análise e desenvolvimento de sistemas e sistemas de informação',
          ano_publicacao: 2013,
          editora: 'Pearson',
          edicao: 6,
          paginas: 634,
          categoria_id: 6 
        },
        {
          titulo: 'Comunicação de Dados e Redes de Computadores',
          imagens: 'images/books/ti/2.jpg',
          sobre: 'Apresenta as características de dispositivos utilizados nas redes de comunicação com computadores, empregando o modelo de cinco camadas da Internet como estrutura para o texto',
          ano_publicacao: 2010,
          editora: 'Mcgraw-hill',
          edicao: 4,
          paginas: 1134,
          categoria_id: 6 
        }
      ]);
    });
};
