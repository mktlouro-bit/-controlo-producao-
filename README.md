# 🧀 Sistema de Controlo de Produção - Lactilouro

Sistema web para registo e análise de dados de produção de queijos Dom Villas.

## 🌟 DUAS VERSÕES DISPONÍVEIS

### 🌐 Versão Firebase (Dados Partilhados) ⭐ RECOMENDADO
**Link:** [controlo_producao_firebase.html](controlo_producao_firebase.html)  
✅ Dados sincronizados em tempo real  
✅ Todos os tablets veem os mesmos dados  
✅ Backup automático na cloud  

### 💾 Versão Local (Dados Individuais)
**Link:** [controlo_producao_queijo.html](controlo_producao_queijo.html)  
✅ Dados armazenados localmente  
✅ Cada dispositivo independente  
✅ Não requer configuração Firebase  

📖 **Veja [QUAL_VERSAO_USAR.md](QUAL_VERSAO_USAR.md) para decidir qual é melhor para si!**

## 📱 Instalação

### Firebase (Recomendado)
1. Configurar Firebase - siga [GUIA_FIREBASE.md](GUIA_FIREBASE.md)
2. Editar `controlo_producao_firebase.html` com suas credenciais
3. Instalar no tablet

### Local (Mais Rápido)
1. Abrir link diretamente
2. Instalar no tablet
3. Pronto!

### Android
1. Abra o link acima no Chrome
2. Toque em **"Instalar"** no banner que aparece
3. Ou: Menu (⋮) → "Adicionar ao ecrã principal"

### iOS
1. Abra o link no Safari
2. Partilhar (□↑) → "Adicionar ao Ecrã Principal"

## 📊 Funcionalidades

### Registo de Dados
- Data de produção
- Tanque de leite (1-4)
- Receita (Flamengo, Light, Sem Lactose)
- Produção (1-15 ou personalizado)
- Gordura e Proteína do leite cru (%)
- Rácio (Inteiro, 20%, 30%)
- Fermento (111, 112, 113, 225, 226 ou outro)
- Temperatura de coagulação (°C)
- Temperatura de lavagem (°C)
- PH (OK ou valor específico)

### Consulta de Dados
- Filtros por período, tanque e receita
- Tabela completa de registos
- Eliminar registos

### Análise e Gráficos
- Estatísticas resumidas (médias, totais)
- 8 gráficos interativos:
  - Evolução de gordura e proteína
  - Distribuição por receita
  - Distribuição por tanque
  - Distribuição por produção
  - Temperaturas de processo
  - Distribuição de fermentos
  - Distribuição de rácios
  - Status PH

### Análise de Correlação PH
- Compara automaticamente parâmetros quando PH não está OK
- Identifica padrões de desvios
- Tabela comparativa (PH OK vs PH com desvios)
- Distribuição de desvios por receita, tanque, fermento e rácio

## 💾 Armazenamento de Dados

**Versão Atual:** Dados armazenados localmente (localStorage)
- Cada dispositivo mantém seus próprios dados
- Funciona offline
- Dados não são partilhados entre dispositivos

## 🔧 Tecnologias

- HTML5, CSS3, JavaScript
- Chart.js para gráficos
- PWA (Progressive Web App) para instalação
- Service Worker para funcionamento offline
- LocalStorage para persistência de dados

## 📁 Estrutura de Ficheiros

```
📦 Repositório
 ┣ 📄 controlo_producao_queijo.html  (Aplicação principal)
 ┣ 📄 manifest.json                   (Configuração PWA)
 ┣ 📄 sw.js                           (Service Worker)
 ┣ 📄 INSTRUÇÕES.md                   (Manual de utilização)
 ┗ 📄 README.md                       (Este ficheiro)
```

## 🚀 Como Usar

1. Aceda ao link da aplicação
2. Instale no dispositivo (opcional mas recomendado)
3. Registe dados na tab "Registo de Dados"
4. Consulte registos na tab "Consulta de Dados"
5. Analise tendências na tab "Análise e Gráficos"

## ⚠️ Notas Importantes

- App funciona melhor em Chrome/Edge (Android) e Safari (iOS)
- Necessita internet apenas no primeiro acesso
- Funciona offline após instalação
- Dados ficam no dispositivo (não há sincronização entre tablets)

## 🔄 Atualizações Futuras Planeadas

- [ ] Sincronização de dados entre dispositivos (Firebase)
- [ ] Exportar dados para Excel
- [ ] Backup e restauro de dados
- [ ] Relatórios em PDF
- [ ] Gráficos adicionais personalizáveis
- [ ] Sistema de utilizadores e permissões
- [ ] Dashboard em tempo real

## 📞 Suporte

Para questões técnicas ou sugestões de melhorias, contacte o departamento de TI.

## 📄 Licença

© 2026 Lactilouro - Queijos Dom Villas
Uso interno exclusivo.

---

**Desenvolvido para Lactilouro - Queijos Dom Villas**
