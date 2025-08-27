import { useState, useEffect } from "react";
import ClientsTable from "./components/ClientsTable";
import InputWithLabel from "./components/InputWithLabel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./App.css";

export default function App() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [OpenAddClient, setOpenAddClient] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/api/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  const searchedClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      client.id.toString().includes(searchTerm.trim().toLocaleLowerCase()),
  );
  return (
    <div className="App p-4 h-full w-4xl text-gray-950 bg-white">
      {clients.length > 0 ? (
        <>
          <div className="flex place-content-between place-items-center my-3 relative">
            <InputWithLabel
              id="search"
              placeholder="search clients by id or name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="bg-gray-950 text-white py-2.5 px-8 shadow shadow-gray-950 capitalize"
              onClick={() => setOpenAddClient((prev) => !prev)}
            >
              add new client
            </button>
            {OpenAddClient && (
              <AddNewClient onOpenAddClient={setOpenAddClient} />
            )}
          </div>
          <ClientsTable clients={searchedClients} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function AddNewClient({ onOpenAddClient }) {
  const [steps, setSteps] = useState(0);
  return (
    <>
      <div className="absolute top-0 right-0 m-4 mt-8 p-4 border z-10 shadow shadow-gray-300 bg-white w-[40rem] h-fit">
        <button
          className="py-1 px-4 mb-4 capitalize border border-gray-400 text-gray-700 flex gap-1 place-content-between place-items-center"
          onClick={() => onOpenAddClient((prev) => !prev)}
        >
          <X size={17} />
          close
        </button>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 border border-gray-200 p-4">
            <ul className="[&>li]:capitalize grid gap-2">
              <li className={steps === 0 && "font-semibold text-[1.07rem]"}>
                client's information
              </li>
              <li className={steps === 1 && "font-semibold text-[1.07rem]"}>
                plot information
              </li>
              <li className={steps === 2 && "font-semibold text-[1.07rem]"}>
                sales information
              </li>
              <li className={steps === 3 && "font-semibold text-[1.07rem]"}>
                witness's information
              </li>
              <li className={steps === 4 && "font-semibold text-[1.07rem]"}>
                documents
              </li>
            </ul>
          </div>
          <form action="" className="grid">
            {steps === 0 && <FormSteps info="clinet's info" />}
            {steps === 1 && <PlotDetailsForm />}
            {steps === 2 && <SalesDetailsForm />}
            {steps === 3 && <WitnessDetailsForm />}
            {steps === 4 && <DocumentsDetailsForm />}

            <div className="flex place-content-between my-4">
              <button
                type="button"
                disabled={steps === 0 ? true : false}
                className="py-1 px-4 border border-gray-400 text-gray-700 capitalize flex gap-1 place-content-between place-items-center"
                onClick={() => setSteps((prev) => prev - 1)}
              >
                <ChevronLeft size={17} />
                back
              </button>
              {steps === 4 ? (
                <button
                  className="bg-gray-950 text-white py-1 px-4"
                  type="button"
                >
                  submit
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSteps((prev) => prev + 1)}
                  className="bg-gray-950 text-white py-1 px-4 flex gap-1 capitalize place-content-between place-items-center"
                >
                  next
                  <ChevronRight size={17} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function FormSteps({ info }) {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">{info}</h3>
        <p className="text-gray-600">provide client's information below</p>
      </div>
      <InputWithLabel
        placeholder="enter your name"
        label="name"
        styles="grid"
      />
      <InputWithLabel placeholder="enter your sex" label="sex" styles="grid" />
      <InputWithLabel
        placeholder="enter your phone"
        label="phone"
        styles="grid"
      />
      <InputWithLabel
        placeholder="enter your adress"
        label="address"
        styles="grid"
      />
      <InputWithLabel
        placeholder="enter your email"
        label="email"
        styles="grid"
      />
    </>
  );
}

function PlotDetailsForm() {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">plot info</h3>
        <p className="text-gray-600">provide plot information below</p>
      </div>
      <InputWithLabel
        label="plot number"
        placeholder="plot number e.g A2, B34"
      />
      <InputWithLabel label="plot size" placeholder="plot size e.g 20m x 20m" />
      <InputWithLabel
        label="location"
        placeholder="site location e.g 10 miles mungule"
      />
      <InputWithLabel
        label="site plan link"
        placeholder="site plan link e.g https://gdrive.com/kj5nalkkl"
      />
    </>
  );
}

function SalesDetailsForm() {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">sales info</h3>
        <p className="text-gray-600">provide sales information below</p>
      </div>
      <div>
        <InputWithLabel label="grand price" placeholder="total cost of plot" />
        <InputWithLabel label="amount paid" placeholder="enter amount paid" />
        <InputWithLabel label="balance" placeholder="enter balance" />
      </div>
    </>
  );
}

function WitnessDetailsForm() {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">witness info</h3>
        <p className="text-gray-600">provide sales information below</p>
      </div>
      <div>
        <InputWithLabel label="name" placeholder="enter witness name" />
        <InputWithLabel label="nrc" placeholder="enter witness nrc" />
        <InputWithLabel
          label="phone"
          placeholder="enter witness phone number"
        />
        <InputWithLabel label="address" placeholder="enter witness residence" />
        <InputWithLabel
          label="relation to client"
          placeholder="enter witness relation to the buyer"
        />
      </div>
    </>
  );
}

function DocumentsDetailsForm() {
  return (
    <>
      <div className="border-b border-gray-300 pb-2 mb-2">
        <h3 className="capitalize text-2xl font-semibold">documents info</h3>
        <p className="text-gray-600">provide sales information below</p>
      </div>
      <div>
        <InputWithLabel
          label="nrc link"
          placeholder="enter link to client's nrc"
        />
        <InputWithLabel
          label="contract"
          placeholder="enter link to client's plot contract"
        />
        <InputWithLabel
          label="other docs"
          placeholder="enter other related documents"
        />
      </div>
    </>
  );
}
