# Maksim Lyara

**Senior Machine Learning Engineer / Data Scientist**

- Telegram: [@maxlyara1](https://t.me/maxlyara1)
- Email: [maks.lyara@gmail.com](mailto:maks.lyara@gmail.com)
- Phone: [+7 (911) 960 08 66](tel:+79119600866)
- [Certificates](https://drive.google.com/drive/folders/1r9MWmdKT1crSFLui4-bHhgw5ErIWPB44?usp=sharing)
- GitHub: [github.com/maxlyara1](https://github.com/maxlyara1)

---

## Summary
Senior ML Engineer / Data Scientist with experience in building ML solutions in the pharmaceutical and FMCG sectors. Specialized in time series forecasting (S&OP), inventory optimization, RAG/LLM-agents, and Computer Vision. Experienced in designing scalable architectures (from ETL to real-time inference) with proven business impact.

---

## Work Experience (2+ Years)

### Data Scientist / ML Engineer | JSC Akrikhin
*March 2025 — Present*
- **Demand Forecasting (S&OP):** Built a Sell-In sales forecasting system for the contracting campaign at the SKU + month + chain level (CatBoost, Tweedie loss, Airflow). Achieved 85% accuracy (1-WAPE) for SKU+month and 65% for SKU+month+chain (96% total accuracy).
- **Inventory Optimization (MIP):** Built a Mixed-Integer Programming (MIP) model for Safety Stocks with inventory continuity constraints. Integrated into Airflow via PuLP/CBC, reducing excess stock by 10% at a 98% service level.
- **AI Agents & RAG:** Designed FastAPI agents: RAG for company regulations and corporate knowledge base (Qdrant + TEI, BM25), a secure SQL agent for ClickHouse with AST validation, and a real-time price monitoring agent (anti-scraping bypass, TTL caching).
- **Yandex Tracker Automation:** Deployed three Tracker agents using MCP (stdio/HTTP) with SSE streaming of execution states. Automated .ics/.eml generation with S3 (MinIO) storage.
- **Anti-Fraud (Graphs):** Deployed a ClickHouse SQL graph search (DFS/BFS up to 5 steps) for arbitrage detection with residual edge flow decomposition, tracking leakage back to distributors.
- **Computer Vision:** Built a shelf audit CV pipeline: fine-tuned YOLOv12l for SKU detection (110K+ classes) and a zero-shot classifier (DINOv2/DINOv3). Integrated image quality gate (Laplacian blur and glare checks).

### ML Engineer | Mars L.L.C.
*December 2023 — December 2024*
- **Churn Prediction & NLP:** Built retail outlet churn forecast (CatBoost, geo-data) reducing logistics losses by 7%, and BERT customer feedback classifier reducing manual ticketing by 80%.
- **Shelf Compliance (CV):** Deployed YOLO-based SKU detector for automated control of planograms and Share of Shelf, improving merchandising audit accuracy by 20%.

---

## Selected Projects

- **[Okko Video Search (AI Champ 2026)](https://github.com/maxlyara1/AI_champ_OKKO):** Multimodal semantic video search: ASR transcription, multi-scale text chunking, hybrid search (Qdrant + BM25), and re-ranking via Qwen LLM.
- **[TulaHack (NLP)](https://github.com/maxlyara1/hackathon-manager-work-quality):** Call center quality audit tool: automatic transcription, summarization, and sentiment analysis of dialogs with web interface.
- **[RedLab Hack (Time Series)](https://github.com/maxlyara1/find_anomalies_hackathon):** Anomaly detection in multi-dimensional industrial telemetry sensor time series (placed 3rd).

---

## Education

- **RANEPA, Bachelor's in Digital Economy** (2022 — 2026)
  Institute of Economics, Mathematics and Information Technologies.

---

## Skills

- **Languages & ML/DS:** Python (PyTorch, CatBoost, pandas, Optuna), SQL (ClickHouse, PostgreSQL), Classical ML, Time Series, Computer Vision (YOLO, ViT), NLP (BERT, ASR)
- **LLMs & AI Agents:** LLMs (Fine-tuning, Prompting), RAG (Qdrant, hybrid search, hybrid retrieval, TEI), AI Agents, LangGraph, FastAPI, MCP (Model Context Protocol), YandexGPT API
- **Data, MLOps & Cloud:** Airflow, ClickHouse, PostgreSQL, MSSQL, Kafka, Docker, Kubernetes, Yandex Cloud, MinIO, Git
