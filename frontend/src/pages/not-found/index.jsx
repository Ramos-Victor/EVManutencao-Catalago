import { motion } from "framer-motion";
import { Home, ArrowLeft, Wrench, Snowflake } from "lucide-react";

export function NotFound() {
  return (
    <>
      <style>{`
        .error404-page{
          --bg:#07111f;
          --primary:#22d3ee;
          --primary-dark:#0891b2;
          --text:#ffffff;
          --muted:#94a3b8;
          --border:rgba(255,255,255,0.08);

          min-height:100vh;
          width:100%;

          background:var(--bg);

          position:relative;
          overflow:hidden;

          display:flex;
          align-items:center;
          justify-content:center;

          padding:24px;

          font-family:'Inter', sans-serif;
        }

        .error404-page *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        /* GRID */

        .error404-grid{
          position:absolute;
          inset:0;

          background-image:
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);

          background-size:40px 40px;

          z-index:1;
        }

        /* GLOW */

        .error404-glow{
          position:absolute;
          border-radius:50%;
          filter:blur(120px);
          z-index:0;
        }

        .error404-glow-1{
          width:320px;
          height:320px;

          background:rgba(34,211,238,0.18);

          top:-100px;
          left:-100px;
        }

        .error404-glow-2{
          width:380px;
          height:380px;

          background:rgba(37,99,235,0.16);

          bottom:-120px;
          right:-120px;
        }

        /* FLOATING */

        .error404-floating{
          position:absolute;
          z-index:2;
          opacity:.15;
        }

        .error404-floating svg{
          color:var(--primary);
        }

        .error404-floating-1{
          top:100px;
          left:80px;
        }

        .error404-floating-2{
          bottom:100px;
          right:80px;
        }

        /* CONTENT */

        .error404-container{
          position:relative;
          z-index:10;

          width:100%;
          max-width:720px;

          text-align:center;
        }

        /* BADGE */

        .error404-badge{
          display:inline-flex;
          align-items:center;
          gap:10px;

          padding:12px 18px;

          border-radius:999px;

          border:1px solid var(--border);

          background:rgba(255,255,255,0.04);

          backdrop-filter:blur(10px);

          margin-bottom:40px;
        }

        .error404-badge-dot{
          width:10px;
          height:10px;

          border-radius:50%;

          background:var(--primary);

          animation:error404Pulse 1.5s infinite;
        }

        @keyframes error404Pulse{
          0%{
            transform:scale(1);
            opacity:1;
          }

          50%{
            transform:scale(1.3);
            opacity:.5;
          }

          100%{
            transform:scale(1);
            opacity:1;
          }
        }

        .error404-badge span{
          color:#cbd5e1;
          font-size:14px;
          letter-spacing:1px;
          font-weight:500;
        }

        /* 404 */

        .error404-code{
          font-size:clamp(110px, 18vw, 190px);
          font-weight:900;
          line-height:1;

          margin-bottom:20px;

          background:linear-gradient(
            to bottom,
            #67e8f9,
            #2563eb
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;

          text-shadow:
          0 0 40px rgba(34,211,238,0.25);
        }

        .error404-title{
          color:var(--text);

          font-size:clamp(32px, 5vw, 48px);
          font-weight:800;

          margin-bottom:18px;
        }

        .error404-description{
          color:var(--muted);

          font-size:18px;
          line-height:1.7;

          max-width:580px;

          margin:0 auto;
        }

        /* BUTTONS */

        .error404-buttons{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:18px;

          flex-wrap:wrap;

          margin-top:50px;
        }

        .error404-btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;

          border:none;
          outline:none;

          cursor:pointer;

          padding:16px 28px;

          border-radius:18px;

          font-size:15px;
          font-weight:600;

          text-decoration:none;

          transition:.3s ease;
        }

        .error404-btn-primary{
          background:var(--primary);
          color:#001018;

          box-shadow:
          0 0 30px rgba(34,211,238,0.35);
        }

        .error404-btn-primary:hover{
          background:#67e8f9;
          transform:translateY(-3px);
        }

        .error404-btn-secondary{
          background:rgba(255,255,255,0.04);

          border:1px solid var(--border);

          color:white;

          backdrop-filter:blur(10px);
        }

        .error404-btn-secondary:hover{
          background:rgba(255,255,255,0.08);
          transform:translateY(-3px);
        }

        /* FOOTER */

        .error404-footer{
          margin-top:60px;

          color:#64748b;

          font-size:14px;
        }

        /* RESPONSIVE */

        @media(max-width:768px){

          .error404-floating{
            display:none;
          }

          .error404-description{
            font-size:16px;
          }

          .error404-buttons{
            flex-direction:column;
          }

          .error404-btn{
            width:100%;
          }
        }
      `}</style>

      <main className="error404-page">
        <div className="error404-grid"></div>

        <div className="error404-glow error404-glow-1"></div>
        <div className="error404-glow error404-glow-2"></div>

        {/* Floating Icons */}

        <motion.div
          className="error404-floating error404-floating-1"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Snowflake size={52} />
        </motion.div>

        <motion.div
          className="error404-floating error404-floating-2"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <Wrench size={52} />
        </motion.div>

        {/* CONTENT */}

        <motion.section
          className="error404-container"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="error404-badge">
            <div className="error404-badge-dot"></div>
            <span>EVMANUTENÇÃO</span>
          </div>

          <motion.h1
            className="error404-code"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>

          <h2 className="error404-title">Página não encontrada</h2>

          <p className="error404-description">
            Parece que a página que você tentou acessar foi removida, renomeada
            ou está temporariamente indisponível.
          </p>

          <div className="error404-buttons">
            <a href="/" className="error404-btn error404-btn-primary">
              <Home size={20} />
              Voltar para Home
            </a>

            <button
              className="error404-btn error404-btn-secondary"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={20} />
              Página anterior
            </button>
          </div>

          <p className="error404-footer">
            © 2026 EVMANUTENÇÃO • Climatização & Elétrica
          </p>
        </motion.section>
      </main>
    </>
  );
}
