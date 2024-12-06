// ROITable.jsx
import React, { useState } from "react";
import { Table, Tooltip, Layout, Menu, Modal, Button, Divider } from "antd";
import {
  DownloadOutlined,
  HomeOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./index.css";

const { Header, Sider, Content } = Layout;

const ROITable = () => {
  // State for modal visibility and selected data
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMerchantData, setSelectedMerchantData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // Define the columns for the main ROI table
  const columns = [
    {
      title: "ROI Name",
      dataIndex: "roiName",
      key: "roiName",
      render: (text) => <strong>{text}</strong>,
      fixed: "left",
      width: 200,
    },
    {
      title: "Created By",
      dataIndex: "createdBy",
      key: "createdBy",
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      key: "createdOn",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Tooltip title="Download the full report">
          <DownloadOutlined
            style={{ marginRight: 16, cursor: "pointer" }}
            onClick={() => handleDownload(record.key)}
          />
        </Tooltip>
      ),
    },
  ];

  // Define the data for the ROI table with five ROI objects
  const data = [
    {
      key: "1",
      roiName: "Revenue Optimization A",
      createdBy: "Alice Johnson",
      createdOn: "2024-11-01",
      additionalData: [
        {
          year: "1",
          MerchantsbyEOY: 500,
          TotalSalesVolume: "$1,000,000",
          TotalSalesVolumeCCY: "$700,000",
          TotalSalesVolumeACHY: "$300,000",
          TotalTransactionsY: 12000,
          TotalTransactionsCCY: 8000,
          TotalTransactionsACHY: 4000,
          ProjectedGrossRevenueY: "$200,000",
          ProjectedCostY: "$50,000",
          netProfit: 150000,
        },
        {
          year: "2",
          MerchantsbyEOY: 750,
          TotalSalesVolume: "$1,500,000",
          TotalSalesVolumeCCY: "$1,000,000",
          TotalSalesVolumeACHY: "$500,000",
          TotalTransactionsY: 18000,
          TotalTransactionsCCY: 12000,
          TotalTransactionsACHY: 6000,
          ProjectedGrossRevenueY: "$300,000",
          ProjectedCostY: "$75,000",
          netProfit: 225000,
        },
        {
          year: "3",
          MerchantsbyEOY: 1000,
          TotalSalesVolume: "$2,000,000",
          TotalSalesVolumeCCY: "$1,500,000",
          TotalSalesVolumeACHY: "$500,000",
          TotalTransactionsY: 24000,
          TotalTransactionsCCY: 16000,
          TotalTransactionsACHY: 8000,
          ProjectedGrossRevenueY: "$400,000",
          ProjectedCostY: "$100,000",
          netProfit: 300000,
        },
      ],
    },
    {
      key: "2",
      roiName: "Marketing ROI Analysis",
      createdBy: "Bob Smith",
      createdOn: "2024-11-02",
      additionalData: [
        {
          year: "1",
          MerchantsbyEOY: 300,
          TotalSalesVolume: "$800,000",
          TotalSalesVolumeCCY: "$500,000",
          TotalSalesVolumeACHY: "$300,000",
          TotalTransactionsY: 10000,
          TotalTransactionsCCY: 6000,
          TotalTransactionsACHY: 4000,
          ProjectedGrossRevenueY: "$150,000",
          ProjectedCostY: "$40,000",
          netProfit: 110000,
        },
        {
          year: "2",
          MerchantsbyEOY: 450,
          TotalSalesVolume: "$1,200,000",
          TotalSalesVolumeCCY: "$800,000",
          TotalSalesVolumeACHY: "$400,000",
          TotalTransactionsY: 15000,
          TotalTransactionsCCY: 10000,
          TotalTransactionsACHY: 5000,
          ProjectedGrossRevenueY: "$250,000",
          ProjectedCostY: "$60,000",
          netProfit: 190000,
        },
        {
          year: "3",
          MerchantsbyEOY: 600,
          TotalSalesVolume: "$1,600,000",
          TotalSalesVolumeCCY: "$1,200,000",
          TotalSalesVolumeACHY: "$400,000",
          TotalTransactionsY: 20000,
          TotalTransactionsCCY: 14000,
          TotalTransactionsACHY: 6000,
          ProjectedGrossRevenueY: "$320,000",
          ProjectedCostY: "$80,000",
          netProfit: 240000,
        },
      ],
    },
    {
      key: "3",
      roiName: "Customer Retention B",
      createdBy: "Carol Davis",
      createdOn: "2024-11-03",
      additionalData: [
        {
          year: "1",
          MerchantsbyEOY: 400,
          TotalSalesVolume: "$900,000",
          TotalSalesVolumeCCY: "$600,000",
          TotalSalesVolumeACHY: "$300,000",
          TotalTransactionsY: 11000,
          TotalTransactionsCCY: 7000,
          TotalTransactionsACHY: 4000,
          ProjectedGrossRevenueY: "$180,000",
          ProjectedCostY: "$45,000",
          netProfit: 135000,
        },
        {
          year: "2",
          MerchantsbyEOY: 550,
          TotalSalesVolume: "$1,350,000",
          TotalSalesVolumeCCY: "$900,000",
          TotalSalesVolumeACHY: "$450,000",
          TotalTransactionsY: 16500,
          TotalTransactionsCCY: 10500,
          TotalTransactionsACHY: 6000,
          ProjectedGrossRevenueY: "$270,000",
          ProjectedCostY: "$67,500",
          netProfit: 202500,
        },
        {
          year: "3",
          MerchantsbyEOY: 700,
          TotalSalesVolume: "$1,800,000",
          TotalSalesVolumeCCY: "$1,200,000",
          TotalSalesVolumeACHY: "$600,000",
          TotalTransactionsY: 22000,
          TotalTransactionsCCY: 14000,
          TotalTransactionsACHY: 8000,
          ProjectedGrossRevenueY: "$360,000",
          ProjectedCostY: "$90,000",
          netProfit: 270000,
        },
      ],
    },
    {
      key: "4",
      roiName: "Sales Growth C",
      createdBy: "David Lee",
      createdOn: "2024-11-04",
      additionalData: [
        {
          year: "1",
          MerchantsbyEOY: 350,
          TotalSalesVolume: "$950,000",
          TotalSalesVolumeCCY: "$650,000",
          TotalSalesVolumeACHY: "$300,000",
          TotalTransactionsY: 11500,
          TotalTransactionsCCY: 7500,
          TotalTransactionsACHY: 4000,
          ProjectedGrossRevenueY: "$190,000",
          ProjectedCostY: "$47,500",
          netProfit: 142500,
        },
        {
          year: "2",
          MerchantsbyEOY: 525,
          TotalSalesVolume: "$1,425,000",
          TotalSalesVolumeCCY: "$975,000",
          TotalSalesVolumeACHY: "$450,000",
          TotalTransactionsY: 17250,
          TotalTransactionsCCY: 11250,
          TotalTransactionsACHY: 6000,
          ProjectedGrossRevenueY: "$285,000",
          ProjectedCostY: "$71,250",
          netProfit: 213750,
        },
        {
          year: "3",
          MerchantsbyEOY: 700,
          TotalSalesVolume: "$1,900,000",
          TotalSalesVolumeCCY: "$1,300,000",
          TotalSalesVolumeACHY: "$600,000",
          TotalTransactionsY: 23000,
          TotalTransactionsCCY: 15000,
          TotalTransactionsACHY: 8000,
          ProjectedGrossRevenueY: "$380,000",
          ProjectedCostY: "$95,000",
          netProfit: 285000,
        },
      ],
    },
    {
      key: "5",
      roiName: "Operational Efficiency D",
      createdBy: "Eva Martinez",
      createdOn: "2024-11-05",
      additionalData: [
        {
          year: "1",
          MerchantsbyEOY: 450,
          TotalSalesVolume: "$1,100,000",
          TotalSalesVolumeCCY: "$700,000",
          TotalSalesVolumeACHY: "$400,000",
          TotalTransactionsY: 13000,
          TotalTransactionsCCY: 8500,
          TotalTransactionsACHY: 4500,
          ProjectedGrossRevenueY: "$220,000",
          ProjectedCostY: "$55,000",
          netProfit: 165000,
        },
        {
          year: "2",
          MerchantsbyEOY: 600,
          TotalSalesVolume: "$1,600,000",
          TotalSalesVolumeCCY: "$1,000,000",
          TotalSalesVolumeACHY: "$600,000",
          TotalTransactionsY: 18000,
          TotalTransactionsCCY: 12000,
          TotalTransactionsACHY: 6000,
          ProjectedGrossRevenueY: "$320,000",
          ProjectedCostY: "$80,000",
          netProfit: 240000,
        },
        {
          year: "3",
          MerchantsbyEOY: 750,
          TotalSalesVolume: "$2,100,000",
          TotalSalesVolumeCCY: "$1,300,000",
          TotalSalesVolumeACHY: "$800,000",
          TotalTransactionsY: 23000,
          TotalTransactionsCCY: 16000,
          TotalTransactionsACHY: 7000,
          ProjectedGrossRevenueY: "$420,000",
          ProjectedCostY: "$105,000",
          netProfit: 315000,
        },
      ],
    },
  ];


  // Handle the download action
  const handleDownload = (key) => {
    console.log(`Download report for record ${key}`);
    // Implement your download logic here
  };

  // Handle the compare action for selected ROIs
  const handleCompare = (keys) => {
    const selectedROIs = data.filter((item) => keys.includes(item.key));
    setSelectedMerchantData(selectedROIs);
    setIsModalVisible(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedMerchantData([]);
    setSelectedRowKeys([]);
  };

  // Row selection configuration
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
  };

  // Extract unique years from the selected ROIs
  const getUniqueYears = () => {
    const yearsSet = new Set();
    selectedMerchantData.forEach((roi) => {
      roi.additionalData.forEach((entry) => {
        yearsSet.add(entry.year);
      });
    });
    return Array.from(yearsSet).sort((a, b) => a - b);
  };

  // Generate comparison tables for each year with grouped headers
  const generateComparisonTables = () => {
    const years = getUniqueYears();

    return (
      <div
        className="comparison-tables-container"
        style={{ overflowX: "auto", paddingBottom: "16px", whiteSpace: "nowrap" }}
      >
        {years.map((year) => {
          const yearData = selectedMerchantData.map((roi) => {
            const dataEntry = roi.additionalData.find(
              (entry) => entry.year === year
            );
            return {
              key: roi.key,
              roiName: roi.roiName,
              MerchantsbyEOY: dataEntry ? dataEntry.MerchantsbyEOY : "N/A",
              TotalSalesVolume: dataEntry ? dataEntry.TotalSalesVolume : "N/A",
              TotalSalesVolumeCCY: dataEntry ? dataEntry.TotalSalesVolumeCCY : "N/A",
              TotalSalesVolumeACHY: dataEntry ? dataEntry.TotalSalesVolumeACHY : "N/A",
              TotalTransactionsY: dataEntry ? dataEntry.TotalTransactionsY : "N/A",
              TotalTransactionsCCY: dataEntry ? dataEntry.TotalTransactionsCCY : "N/A",
              TotalTransactionsACHY: dataEntry ? dataEntry.TotalTransactionsACHY : "N/A",
              ProjectedGrossRevenueY: dataEntry ? dataEntry.ProjectedGrossRevenueY : "N/A",
              ProjectedCostY: dataEntry ? dataEntry.ProjectedCostY : "N/A",
              netProfit: dataEntry ? dataEntry.netProfit : "N/A",
            };
          });

          // Define the grouped columns with a top-level column for Year
          const yearColumns = [
            {
              title: `Year ${year}`,
              children: [
                {
                  title: "ROI Name",
                  dataIndex: "roiName",
                  key: "roiName",
                  fixed: "left",
                  width: 200,
                  onHeaderCell: () => ({
                    className: "roi-name-header",
                  }),
                },
                {
                  title: "Merchants by EOY",
                  dataIndex: "MerchantsbyEOY",
                  key: "MerchantsbyEOY",
                  width: 150,
                  onHeaderCell: () => ({
                    className: "merchants-eoy-header",
                  }),
                },
                {
                  title: "Sales Volume",
                  onHeaderCell: () => ({
                    className: "sales-volume-group",
                  }),
                  children: [
                    
                    {
                      title: "Credit Card",
                      dataIndex: "TotalSalesVolumeCCY",
                      key: "TotalSalesVolumeCCY",
                      width: 200,
                      onHeaderCell: () => ({
                        className: "sales-volume-child",
                      }),
                    },
                    {
                      title: "ACH",
                      dataIndex: "TotalSalesVolumeACHY",
                      key: "TotalSalesVolumeACHY",
                      width: 200,
                      onHeaderCell: () => ({
                        className: "sales-volume-child",
                      }),
                    },
                    {
                      title: "Total",
                      dataIndex: "TotalSalesVolume",
                      key: "TotalSalesVolume",
                      width: 180,
                      onHeaderCell: () => ({
                        className: "sales-volume-child",
                      }),
                    },
                  ],
                },
                {
                  title: "Total Transactions",
                  onHeaderCell: () => ({
                    className: "total-transactions-group",
                  }),
                  children: [
                    
                    {
                      title: "Credit Card",
                      dataIndex: "TotalTransactionsCCY",
                      key: "TotalTransactionsCCY",
                      width: 200,
                      onHeaderCell: () => ({
                        className: "total-transactions-child",
                      }),
                    },
                    {
                      title: "ACH",
                      dataIndex: "TotalTransactionsACHY",
                      key: "TotalTransactionsACHY",
                      width: 200,
                      onHeaderCell: () => ({
                        className: "total-transactions-child",
                      }),
                    },
                    {
                      title: "Total",
                      dataIndex: "TotalTransactionsY",
                      key: "TotalTransactionsY",
                      width: 180,
                      onHeaderCell: () => ({
                        className: "total-transactions-child",
                      }),
                    },
                  ],
                },
                {
                  title: "Projected P&L",
                  onHeaderCell: () => ({
                    className: "projected-pl-group",
                  }),
                  children: [
                    {
                      title: "Gross Revenue",
                      dataIndex: "ProjectedGrossRevenueY",
                      key: "ProjectedGrossRevenueY",
                      width: 220,
                      onHeaderCell: () => ({
                        className: "projected-pl-child",
                      }),
                    },
                    {
                      title: "Cost",
                      dataIndex: "ProjectedCostY",
                      key: "ProjectedCostY",
                      width: 150,
                      onHeaderCell: () => ({
                        className: "projected-pl-child",
                      }),
                    },
                    {
                      title: "Net Profit",
                      dataIndex: "netProfit",
                      key: "netProfit",
                      width: 120,
                      onHeaderCell: () => ({
                        className: "projected-pl-child",
                      }),
                    },
                  ],
                },
              ],
            },
          ];

          return (
            <div key={year} style={{ marginBottom: "24px" }}>
              <Table
                columns={yearColumns}
                dataSource={yearData}
                pagination={false}
                bordered
                size="small"
                rowKey="key"
                className="comparison-table"
              />
              <Divider />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {/* Sidebar Menu */}
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined />}>
            Analytics
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Layout */}
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content
          style={{
            padding: "24px",
            minHeight: 280,
            backgroundColor: "#ffffff",
          }}
        >
          {/* Compare Button */}
          <div style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              disabled={selectedRowKeys.length === 0}
              onClick={() => handleCompare(selectedRowKeys)}
            >
              Compare Selected
            </Button>
          </div>

          {/* ROI Table with Row Selection */}
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            bordered
            pagination={{ pageSize: 5 }}
            rowKey={(record) => record.key}
            className="main-table"
          />
        </Content>
      </Layout>

      {/* Comparison Modal */}
      <Modal
        title="Compare ROI Objects"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
        width={1600} // Increased width to accommodate more columns
        bodyStyle={{ maxHeight: "80vh", overflowY: "auto" }}
      >
        {selectedMerchantData.length > 0 && generateComparisonTables()}
      </Modal>
    </Layout>
  );
};

export default ROITable;
