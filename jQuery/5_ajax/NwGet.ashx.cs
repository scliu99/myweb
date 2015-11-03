using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlServerCe;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace jqueryNotes._5_ajax
{
    /// <summary>
    ///NwGet 的摘要描述
    /// </summary>
    public class NwGet : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            int productId = Convert.ToInt32(context.Request.QueryString["id"]);
            const string connectionString = @"Data Source=|DataDirectory|\NorthwindIB.sdf;Persist Security Info=False;";
            string queryString = "select * from Product where ProductID = " + productId;
            using (SqlCeConnection conn = new SqlCeConnection(connectionString))
            {
                SqlCeDataAdapter cmd = new SqlCeDataAdapter(queryString, conn);
                try
                {
                    conn.Open();
                    DataTable dt = new DataTable();
                    cmd.Fill(dt);
                    conn.Close();
                    context.Response.Write(JsonConvert.SerializeObject(dt));
                }
                catch (Exception e)
                {
                    throw e;
                }
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}