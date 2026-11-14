# Maksim Lyara

**ML / AI Systems Engineer (AI Agents, Hybrid RAG, Production ML & Optimization)**

Moscow | [Telegram: @maxlyara1](https://t.me/maxlyara1) | [maks.lyara@gmail.com](mailto:maks.lyara@gmail.com) | +7 (911) 960-08-66 | [github.com/maxlyara1](https://github.com/maxlyara1)

## Summary

ML / AI Systems Engineer with 3 years of commercial experience in Pharma and FMCG. Designs and deploys production AI agent systems, hybrid RAG search, demand forecasting, and mathematical optimization systems end-to-end - from business problem formulation and data pipelines to fault-tolerant backend services and automated quality evaluation.

## Work Experience

### ML / AI Systems Engineer | JSC Akrikhin | March 2025 - Present

- **Enterprise AI Agents & Platform Core Modules (152-FZ):** Launched **10+ domain AI agents** within the unified corporate web interface (role-scoped PPTX/PDF sales presentation builder, field-force copilot, operational agents). Built shared reliability and compliance modules for the platform: seamless failover across cloud LLM providers, real-time PII redaction for 152-FZ compliance, and automated LLM-as-a-Judge quality evaluation.  
  *Stack: FastAPI, LangGraph, MCP, PostgreSQL, Natasha, Cloud LLM APIs (Qwen, DeepSeek, YandexGPT)*
- **Manufacturing & Quality AI Agents (RAG, Text-to-SQL):** On top of the shared agent platform, launched **4 agents** across **2,250 manufacturing SOPs** (208k chunks) and quality incident records with validated SQL generation. Achieved **98.5%** QA accuracy on the quality-assurance benchmark with **0.12s** filtered hybrid search latency.  
  *Stack: Docling, Qdrant, Qwen3-Embedding, BM25, Cross-Encoder, sqlglot*
- **Retail Pharmacy Price Monitoring & Analytics:** Built daily price collection from scratch across **89 cities** via pharmacy aggregators and chain websites (**covering 58 pharmacy chains**), normalizing dosage and pack catalogs. To prevent frequent site layout changes from causing multi-day gaps in price time series or constant manual parser fixes, paired standard HTML parsing with automatic fallback to a low-cost LLM when selectors break (**97.8% completeness** at **3x lower token cost** than pure LLM scraping), feeding **3 analytics AI agents**.  
  *Stack: Python, Playwright, Firecrawl, ClickHouse*
- **Safety Stock Optimization (S&OP):** Developed a safety-stock system across **195 SKUs** combining integer optimization and gradient boosting with probability calibration. In a 12-month backtest, cut **out-of-stock (stockout) incidents by 24.2%** while **freeing up 14.8% of warehouse inventory** (achieving a **13% reduction in planned safety stock** during the S&OP pilot without service-level loss).  
  *Stack: python-mip (CBC), CatBoost, Optuna, ClickHouse, DataLens*
- **Data & ML Pipeline Architecture (Airflow 3):** Refactored the orchestration repository and adapted scheduled data and ML pipelines to Airflow 3, introducing unified project configuration, failure alerting, and structured analytical data-mart builds.  
  *Stack: Airflow 3, ClickHouse, PostgreSQL, Kafka (Debezium CDC), Docker*
- **Computer Vision for Pharmacy Shelf Audit:** Built the pre-labeling and annotation quality-control workflow in Label Studio, fine-tuned and benchmarked package detectors (**YOLOv12** vs. production **YOLOv8**), and co-designed the two-stage shelf-recognition pipeline with metric-learning SKU classification (**DINOv2**).  
  *Stack: PyTorch, YOLOv8, YOLOv12, DINOv2, Label Studio, MinIO (S3)*

### ML Engineer | Mars L.L.C. | December 2023 - December 2024

- **Sales Target Setting & B2B Outlet Retention:** Built an internal web service automating time-series forecasting and target setting across **6 commercial KPIs** for field sales teams to replace manual Excel planning. Deployed a geospatial and transactional B2B outlet churn model, **reducing active outlet churn by 7%**.  
  *Stack: Python, CatBoost, SHAP, Streamlit*
- **Shelf Compliance Vision & Catalog Structuring:** Fine-tuned a shelf-display compliance and spoofed photo-report detector on field store audits (**F1 = 0.92**, **+20% display compliance**). Deployed a neural language model extracting structured product attributes from raw catalog titles.  
  *Stack: PyTorch, EfficientNet-B3, Albumentations, BERT*

## Open-Source Project

- **[Multimodal Video-RAG](https://github.com/maxlyara1/multimodal-video-search):** Semantic video and timestamped scene search across speech transcripts, on-screen text, and visual frames. Query-modality routing and cross-modal score fusion increased **Hit@1 from 66% to 90%** (**Hit@3 = 96%**).  
  *Stack: FastAPI, Qdrant, Whisper Turbo, EasyOCR, BLIP, Qwen3-Embedding*

## Education

- **ITMO University** | M.Sc. in Artificial Intelligence & Behavioral Economics | 2026 - 2028  
  Portfolio Competition Winner. Research: agent-based and econometric modeling of media markets under regulatory constraints.
- **RANEPA (Moscow)** | B.Sc. in Digital Economics, IEMIT | 2022 - 2026  
  GPA: 4.37/5.0. 3rd Place, RedLab Industrial Hackathon on Time-Series Anomaly Detection.

## Technical Skills

- **LLM & AI Agents:** FastAPI, LangGraph, MCP, Qdrant, BM25, Cross-Encoder, Docling, Natasha, Text-to-SQL, Qwen, DeepSeek, YandexGPT
- **ML & Optimization:** Python, PyTorch, CatBoost, LightGBM, scikit-learn, Optuna, python-mip (CBC), Time Series, Calibration, YOLO, DINOv2
- **Infra & Languages:** Airflow 3, ClickHouse, PostgreSQL, Kafka (CDC), MinIO, Docker, Git, Playwright, Label Studio; English (B2), Russian (Native)
