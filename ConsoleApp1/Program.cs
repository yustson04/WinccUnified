// See https://aka.ms/new-console-template for more information

// Console.WriteLine("Hello, World!");

using System;
using System.Windows.Forms;

public class Program
{
    public static MainFrame form = new MainFrame();
    [STAThread]
    static void Main(string[] args)
    {
        form.FormLayout();;
        Application.Run(form);
    }
}
