//https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

export interface Props {
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>,
    children : React.ReactNode
}

const Modal : React.FC<Props> = ({ setIsOpen, children }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            ❌
          </button>
          <div className="modalContent">
            {children}
          </div>
        </div>
      </div>
      <style>
        {`
          body{
            overflow:hidden;
          }
        .darkBG {
            background-color: rgba(0, 0, 0, 0.2);
            width: 100vw;
            height: 100%;
            z-index: 10000000000;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: absolute;
            overflow: no;
          }
          
          .centered {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000000000000;
          }
          
          .modal {
            max-width: 1000px;
            max-height: 500px;
            background: white;
            color: white;
            border-radius: 16px;
            box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
            overflow: scroll;
          }
          @media only screen and (max-width:1000px) {
            .modal{
              max-width: 600px;
              max-height: 400px;
            }
          }
          @media only screen and (max-width:600px) {
            .modal{
              max-width: 400px;
              max-height: 400px;
            }
          }
          @media only screen and (max-width:300px) {
            .modal{
              max-width: 200px;
              max-height: 200px;
            }
          } 
          .modalContent {
            padding: 10px;
            font-size: 14px;
            color: #2c3e50;
            text-align: center;
          }
          
          
          .closeBtn {
            cursor: pointer;
            font-weight: 500;
            padding: 4px 8px;
            border-radius: 8px;
            border: none;
            font-size: 18px;
            color: #2c3e50;
            background: white;
            transition: all 0.25s ease;
            box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
            position: absolute;
            right: 0;
            top: 0;
            align-self: flex-end;
            margin-top: -7px;
            margin-right: -7px;
          }
          
          .closeBtn:hover {
            box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
            transform: translate(-4px, 4px);
          }
          
          .deleteBtn {
            background: #ff3e4e;
            color: #fff;
          }
          
          .deleteBtn:hover {
            box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
            background: #ff3e4e;
          }
          
          .cancelBtn {
            color: #2c3e50;
            background: #fcfcfc;
          }
          
          .cancelBtn:hover {
            background: whitesmoke;
          }`}
      </style>
    </>
  );
};

export default Modal;
