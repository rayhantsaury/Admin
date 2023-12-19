import React, { useEffect, useState } from "react";
// import "./about.css";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Member() {
  const [registers, setRegisters] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchRegisters = async () => {
      const res = await axios.get("/registers" + search);
      setRegisters(res.data);
    };
    fetchRegisters();
  }, [search]);
  return (
    <>
       <Header />
      <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>TTL</th>
              <th>ALAMAT</th>
              <th>EMAIL</th>
              <th>NO WA</th>
            </tr>
          </thead>
          <tbody>
            {registers.map((register, index) => (
              <tr key={register._id}>
                <td>{index + 1}</td>
                <td>{register.nama}</td>
                <td>{register.ttl}</td>
                <td>{register.alamat}</td>
                <td>{register.email}</td>
                <td>{register.wa}</td>
              </tr>
            ))}
          </tbody>
          </Table>
    </>
  );
}
