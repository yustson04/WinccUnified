using System.Windows.Forms;
using System;

public class MainFrame : Form
{
    public void FormLayout()
    {
        this.Name = "MainFrame";
        this.Text = "FurtherDevelopeWindow";
        this.Size = new System.Drawing.Size(500, 500);
        this.StartPosition = FormStartPosition.CenterScreen;
    }
}